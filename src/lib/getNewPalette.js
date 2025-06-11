// lib/getNewPalette.js (or wherever your function is)
import convert from 'color-convert'; // Import the color-convert library

export const generateColorPalette = () => {
  // Helper to convert LCH to HSL, then HSL to Hex
  function lchToHex(l, c, h) {
    const hsl = convert.lch.hsl(l, c, h);
    return hslToHex(hsl[0], hsl[1], hsl[2]);
  }

  // Your existing HSL to Hex function (make sure it's available or inline it)
  function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  // Modified adjustSaturationAndLightness to work with LCH (Chroma and Luminance)
  // Renamed for clarity to adjustLuminanceAndChroma
  function adjustLuminanceAndChroma(baseL, baseC, index, total) {
    // Luminance (L) range: 0-100
    // Chroma (C) range: 0-130 (approx, depends on hue/lightness, max possible)
    // Adjust luminance more subtly based on index for gradient effect
    const luminance = Math.max(10, Math.min(95, baseL + (index - total / 2) * 12 + (Math.random() - 0.5) * 10)); // Smaller random variation

    // Adjust chroma (saturation)
    const chroma = Math.max(20, Math.min(100, baseC + (Math.random() - 0.5) * 30)); // Keep chroma within reasonable bounds

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

  // Strategies with associated weights - MODIFIED TO USE LCH
  const strategiesWithWeights = [
    {
      strategy: () => {
        const baseHue = Math.floor(Math.random() * 360);
        const baseChroma = 40 + Math.random() * 40; // Mid-range saturation
        const baseLuminance = 50 + Math.random() * 20; // Mid-range lightness

        return Array.from({ length: 5 }, (_, i) => {
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          return lchToHex(l, c, baseHue); // Same hue, varying L & C
        });
      },
      weight: 3, // Monochromatic (shades of same color) – higher weight
    },
    {
      strategy: () => {
        const baseHue = Math.floor(Math.random() * 360);
        const baseChroma = 40 + Math.random() * 40;
        const baseLuminance = 50 + Math.random() * 20;

        return Array.from({ length: 5 }, (_, i) => {
          const hue = (baseHue + i * 15 - 30 + 360) % 360; // Analogous hue shifts
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          return lchToHex(l, c, hue);
        });
      },
      weight: 1, // Analogous
    },
    {
      strategy: () => {
        const baseHue = Math.floor(Math.random() * 360);
        const compHue = (baseHue + 180) % 360;
        const baseChroma = 50 + Math.random() * 30;
        const baseLuminance = 50 + Math.random() * 20;
        const colors = [];

        for (let i = 0; i < 5; i++) {
          let hue;
          if (i === 0) hue = baseHue; // Primary
          else if (i === 1) hue = (baseHue + 10) % 360; // Near primary
          else if (i === 2) hue = (baseHue - 10 + 360) % 360; // Near primary
          else if (i === 3) hue = compHue; // Complementary
          else if (i === 4) hue = (compHue + 10) % 360; // Near complementary (subtle variation)

          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          colors.push(lchToHex(l, c, hue));
        }
        return colors;
      },
      weight: 1, // Complementary
    },
    {
      strategy: () => {
        const baseHue = Math.floor(Math.random() * 360);
        const hues = [baseHue, (baseHue + 120) % 360, (baseHue + 240) % 360];
        const baseChroma = 45 + Math.random() * 35;
        const baseLuminance = 45 + Math.random() * 25;
        const colors = [];

        // Distribute hues across the 5 colors, varying L and C
        for (let i = 0; i < 5; i++) {
          const hueIndex = i % 3; // Cycle through the 3 triadic hues
          const hue = hues[hueIndex] + (Math.random() - 0.5) * 10; // Small random wobble
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          colors.push(lchToHex(l, c, hue));
        }
        return colors;
      },
      weight: 1, // Triadic
    },
    {
      strategy: () => {
        const baseHue = Math.floor(Math.random() * 360);
        const splitComp1 = (baseHue + 150) % 360;
        const splitComp2 = (baseHue + 210) % 360;
        const baseChroma = 50 + Math.random() * 30;
        const baseLuminance = 50 + Math.random() * 20;

        // Distribute colors across the primary and two split-complementary hues
        const hues = [
          baseHue, // Main
          (baseHue + 10) % 360, // Near Main
          splitComp1,
          splitComp2,
          (splitComp1 + splitComp2) / 2 // A bridge color, or another variation
        ];

        return hues.map((hue, i) => {
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          return lchToHex(l, c, hue);
        });
      },
      weight: 1, // Split Complementary
    },
    {
      strategy: () => {
        const baseHue = Math.floor(Math.random() * 360);
        const hues = [
          baseHue,
          (baseHue + 90) % 360,
          (baseHue + 180) % 360,
          (baseHue + 270) % 360,
          (baseHue + 45) % 360 // Add an extra hue to fill 5 slots
        ];
        const baseChroma = 45 + Math.random() * 35;
        const baseLuminance = 45 + Math.random() * 25;

        return hues.map((hue, i) => {
          const { l, c } = adjustLuminanceAndChroma(baseLuminance, baseChroma, i, 5);
          return lchToHex(l, c, hue);
        });
      },
      weight: 1, // Tetradic
    },
    {
      strategy: () => {
        const isDark = Math.random() > 0.5;
        const bgLuminance = isDark ? 15 + Math.random() * 15 : 85 - Math.random() * 15; // Darker/Lighter for background
        const textLuminance = isDark ? 90 : 15; // Contrasting for text
        const baseHue = Math.floor(Math.random() * 360);

        // Define specific roles and their LCH properties
        const paletteRoles = [
          { hue: baseHue, chroma: 15 + Math.random() * 10, luminance: bgLuminance }, // Background (muted)
          { hue: baseHue, chroma: 10 + Math.random() * 10, luminance: textLuminance }, // Text (muted, contrasting)
          { hue: baseHue, chroma: 60 + Math.random() * 30, luminance: 50 + Math.random() * 10 }, // Primary (vibrant)
          { hue: (baseHue + 60 + Math.random() * 30) % 360, chroma: 40 + Math.random() * 20, luminance: 60 + Math.random() * 10 }, // Secondary (complementary/analogous-ish)
          { hue: (baseHue + 180 + Math.random() * 30) % 360, chroma: 70 + Math.random() * 30, luminance: 55 + Math.random() * 10 }, // Accent (vibrant, contrasting)
        ];

        return paletteRoles.map(role => lchToHex(role.luminance, role.chroma, role.hue));
      },
      weight: 4, // UI design palette — higher weight
    }
  ];

  const strategy = weightedPick(strategiesWithWeights);
  return strategy();
};