export const getCleanDigit = (value: number, decimal = 2) => {
  return Math.round(value * 10**decimal) / 10**decimal;
};
