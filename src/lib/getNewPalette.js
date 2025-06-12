import convert from 'color-convert'; // Import the color-convert library

export const generateColorPalette = () => {
  // Helper to convert LCH to HSL, then HSL to Hex
  function lchToHex(l, c, h) {
    l = Math.max(0, Math.min(100, l));
    c = Math.max(0, Math.min(120, c)); // Clamp chroma for practical hex output
    h = (h % 360 + 360) % 360; // Normalize hue

    try {
      const hsl = convert.lch.hsl(l, c, h);
      return hslToHex(hsl[0], hsl[1], hsl[2]);
    } catch (e) {
      // Fallback for extreme values that might not convert well
      console.warn(`LCH to HSL conversion error for L:${l}, C:${c}, H:${h}. Falling back to default.`);
      if (l < 20) return "#1a1a1a"; // Dark gray
      if (l > 80) return "#e6e6e6"; // Light gray
      return "#808080"; // Mid gray
    }
  }

  // Your existing HSL to Hex function (make sure it's available or inline it)
  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  // Modified adjustLuminanceAndChroma
  function adjustLuminanceAndChroma(baseL, baseC, index, total, allowExtremes = false) {
    let luminance, chroma;

    if (allowExtremes) {
      luminance = baseL + (index - total / 2) * 20 + (Math.random() - 0.5) * 10;
      chroma = baseC + (Math.random() - 0.5) * 10;
    } else {
      luminance = Math.max(10, Math.min(95, baseL + (index - total / 2) * 12 + (Math.random() - 0.5) * 10));
      chroma = Math.max(10, Math.min(100, baseC + (Math.random() - 0.5) * 20));
    }

    luminance = Math.max(0, Math.min(100, luminance));
    chroma = Math.max(0, chroma);

    return { l: luminance, c: chroma };
  }

  // Weighted random picker (remains the same)
  function weightedPick(strategiesWithWeights) {
    const totalWeight = strategiesWithWeights.reduce((sum, { weight }) => sum + weight, 0);
    const rand = Math.random() * totalWeight;
    let cumulative = 0;
    for (const { strategy, weight } of strategiesWithWeights) {
      cumulative += weight;
      if (rand < cumulative) return strategy;
    }
  }

  // Helper to ensure 5 unique colors
  function ensureUniqueColors(generateFn) {
    let colors = new Set();
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loops for impossible scenarios

    while (colors.size < 5 && attempts < maxAttempts) {
      const newColors = generateFn(); // Call the original generation logic
      newColors.forEach(color => colors.add(color));
      attempts++;

      // If we've generated more than 5 unique colors, take the first 5
      if (colors.size >= 5) {
        return Array.from(colors).slice(0, 5);
      }
    }
    // If we can't generate 5 unique colors after maxAttempts,
    // take what we have and potentially fill with random grays/blacks/whites
    const finalColors = Array.from(colors);
    while (finalColors.length < 5) {
        // Add a random neutral to fill the gap
        const l = Math.random() * 100;
        const hex = lchToHex(l, 0, 0);
        if (!finalColors.includes(hex)) {
            finalColors.push(hex);
        }
    }
    return finalColors;
  }

  // Strategies with associated weights - MODIFIED TO USE LCH
  const strategiesWithWeights = [
    {
      strategy: () => ensureUniqueColors(() => {
        const baseHue = Math.floor(Math.random() * 360);
        const baseChroma = 40 + Math.random() * 40;
        const baseLuminance = 50 + Math.random() * 20;

        return Array.from({ length: 5 }, (_, i) => {
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          return lchToHex(l, c, baseHue);
        });
      }),
      weight: 3, // Monochromatic (shades of same color) – higher weight
    },
    {
      strategy: () => ensureUniqueColors(() => {
        const baseHue = Math.floor(Math.random() * 360);
        const baseChroma = 40 + Math.random() * 40;
        const baseLuminance = 50 + Math.random() * 20;

        return Array.from({ length: 5 }, (_, i) => {
          const hue = (baseHue + i * 15 - 30 + 360) % 360;
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          return lchToHex(l, c, hue);
        });
      }),
      weight: 1, // Analogous
    },
    {
      strategy: () => ensureUniqueColors(() => {
        const baseHue = Math.floor(Math.random() * 360);
        const compHue = (baseHue + 180) % 360;
        const baseChroma = 50 + Math.random() * 30;
        const baseLuminance = 50 + Math.random() * 20;
        const colors = [];

        for (let i = 0; i < 5; i++) {
          let hue;
          if (i === 0) hue = baseHue;
          else if (i === 1) hue = (baseHue + 10) % 360;
          else if (i === 2) hue = (baseHue - 10 + 360) % 360;
          else if (i === 3) hue = compHue;
          else if (i === 4) hue = (compHue + 10) % 360;

          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          colors.push(lchToHex(l, c, hue));
        }
        return colors;
      }),
      weight: 1, // Complementary
    },
    {
      strategy: () => ensureUniqueColors(() => {
        const baseHue = Math.floor(Math.random() * 360);
        const hues = [baseHue, (baseHue + 120) % 360, (baseHue + 240) % 360];
        const baseChroma = 45 + Math.random() * 35;
        const baseLuminance = 45 + Math.random() * 25;
        const colors = [];

        for (let i = 0; i < 5; i++) {
          const hueIndex = i % 3;
          const hue = hues[hueIndex] + (Math.random() - 0.5) * 10;
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          colors.push(lchToHex(l, c, hue));
        }
        return colors;
      }),
      weight: 1, // Triadic
    },
    {
      strategy: () => ensureUniqueColors(() => {
        const baseHue = Math.floor(Math.random() * 360);
        const splitComp1 = (baseHue + 150) % 360;
        const splitComp2 = (baseHue + 210) % 360;
        const baseChroma = 50 + Math.random() * 30;
        const baseLuminance = 50 + Math.random() * 20;

        const hues = [
          baseHue,
          (baseHue + 10) % 360,
          splitComp1,
          splitComp2,
          (splitComp1 + splitComp2) / 2
        ];

        return hues.map((hue, i) => {
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          return lchToHex(l, c, hue);
        });
      }),
      weight: 1, // Split Complementary
    },
    {
      strategy: () => ensureUniqueColors(() => {
        const baseHue = Math.floor(Math.random() * 360);
        const hues = [
          baseHue,
          (baseHue + 90) % 360,
          (baseHue + 180) % 360,
          (baseHue + 270) % 360,
          (baseHue + 45) % 360
        ];
        const baseChroma = 45 + Math.random() * 35;
        const baseLuminance = 45 + Math.random() * 25;

        return hues.map((hue, i) => {
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          return lchToHex(l, c, hue);
        });
      }),
      weight: 1, // Tetradic
    },
    {
      strategy: () => ensureUniqueColors(() => {
        const isDark = Math.random() > 0.5;
        const bgLuminance = isDark ? 10 + Math.random() * 20 : 70 + Math.random() * 20;
        const textLuminance = isDark ? 80 + Math.random() * 15 : 5 + Math.random() * 15;
        const accentHue = Math.floor(Math.random() * 360);
        const baseChroma = 5 + Math.random() * 15;

        const paletteRoles = [
          { hue: 0, chroma: 0 + Math.random() * 5, luminance: bgLuminance + (Math.random() - 0.5) * 5 },
          { hue: 0, chroma: 0 + Math.random() * 5, luminance: textLuminance + (Math.random() - 0.5) * 5 },
          { hue: accentHue, chroma: 60 + Math.random() * 30, luminance: 50 + Math.random() * 20 },
          { hue: (accentHue + 60 + Math.random() * 30) % 360, chroma: 40 + Math.random() * 20, luminance: 60 + Math.random() * 10 },
          { hue: 0, chroma: 0 + Math.random() * 5, luminance: bgLuminance + (Math.random() - 0.5) * 10 }
        ];

        return paletteRoles.map(role => lchToHex(role.luminance, role.chroma, role.hue));
      }),
      weight: 4, // UI design palette — higher weight, more likely to contain neutrals
    },
    // --- Neutral Strategies ---
    {
      strategy: () => ensureUniqueColors(() => {
        const baseL = 50;
        const baseC = 0 + Math.random() * 3;

        return Array.from({ length: 5 }, (_, i) => {
          const { l, c } = adjustLuminanceAndChroma(baseL, baseC, i, 5, true);
          return lchToHex(l, c, 0);
        });
      }),
      weight: 3, // Increased weight for varied grays
    },
    {
      strategy: () => ensureUniqueColors(() => {
        const colorsToGenerate = new Set();
        const possibleNeutrals = [
          { l: 0, c: 0 },    // Pure Black
          { l: 100, c: 0 },  // Pure White
          { l: 5 + Math.random() * 10, c: 0 + Math.random() * 3 },    // Very Dark Gray / Near Black
          { l: 15 + Math.random() * 15, c: 0 + Math.random() * 5 },  // Dark Gray
          { l: 30 + Math.random() * 10, c: 0 + Math.random() * 5 },  // Mid-Dark Gray
          { l: 50 + Math.random() * 5, c: 0 + Math.random() * 5 },   // Mid Gray
          { l: 70 + Math.random() * 10, c: 0 + Math.random() * 5 },  // Light Gray
          { l: 85 + Math.random() * 10, c: 0 + Math.random() * 3 },  // Very Light Gray / Near White
        ];

        // Ensure a good mix of pure black/white/shades without overdoing pure black/white
        const numPureNeutrals = Math.random() < 0.5 ? 1 : 0; // 0 or 1 pure black/white
        const numShades = 5 - numPureNeutrals;

        // Try to get pure black/white if desired
        if (numPureNeutrals > 0) {
            const pureOptions = ["#000000", "#FFFFFF"];
            colorsToGenerate.add(pureOptions[Math.floor(Math.random() * pureOptions.length)]);
        }

        // Fill the rest with shades from possibleNeutrals
        while (colorsToGenerate.size < 5) {
            const picked = possibleNeutrals[Math.floor(Math.random() * possibleNeutrals.length)];
            colorsToGenerate.add(lchToHex(picked.l, picked.c, 0));
        }

        return Array.from(colorsToGenerate);
      }),
      weight: 1, // Reduced weight for this more "utility" neutral strategy
    },
    {
      strategy: () => ensureUniqueColors(() => {
        const baseHue = Math.floor(Math.random() * 360);
        const baseChroma = 5 + Math.random() * 20;
        const baseLuminance = 40 + Math.random() * 30;

        return Array.from({ length: 5 }, (_, i) => {
          const hue = (baseHue + (i - 2) * 15 + 360) % 360;
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          return lchToHex(l, c, hue);
        });
      }),
      weight: 2, // Moderate weight for muted palettes
    },
  ];

  const strategy = weightedPick(strategiesWithWeights);
  return strategy();
};