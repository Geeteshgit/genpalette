export const getBestContrastColor = (hex) => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Perceived luminance formula (standard)
  const luminance =
    0.2126 * (r / 255) +
    0.7152 * (g / 255) +
    0.0722 * (b / 255);

  // Thresholds tuned for better contrast
  if (luminance > 0.8) {
    // Very light background — use dark gray (not pure black)
    return "#222222"; // dark gray
  } else if (luminance > 0.6) {
    // Light background — use medium dark gray
    return "#333333";
  } else if (luminance > 0.4) {
    // Mid background — use near black
    return "#111111";
  } else if (luminance > 0.2) {
    // Dark background — use off-white
    return "#eeeeee";
  } else {
    // Very dark background — use pure white
    return "#ffffff";
  }
};
