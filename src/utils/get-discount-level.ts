export const getDiscountLevel = (discountPercent: number) => {
  if (discountPercent < - 20) {
    return 'ultra-overpriced';
  }

  if (discountPercent < - 0) {
    return 'overpriced';
  }

  if (discountPercent > 50) {
    return 'very-good';
  }

  if (discountPercent > 30) {
    return 'good';
  }

  if (discountPercent > 15) {
    return 'notable';
  }

  return 'none';
};
