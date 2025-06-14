/**
 * Scales a numeric quantity by the given factor
 * @param quantity The original quantity
 * @param scalingFactor The scaling factor
 * @returns The scaled quantity, rounded to 2 decimal places
 */
export const scaleQuantity = (
  quantity: number,
  scalingFactor: number
): number => {
  const scaled = quantity * scalingFactor;

  // For small values, allow up to 2 decimal places
  if (scaled < 10) {
    return Math.round(scaled * 100) / 100;
  }

  // For larger values, just use 1 decimal place
  return Math.round(scaled * 10) / 10;
};
