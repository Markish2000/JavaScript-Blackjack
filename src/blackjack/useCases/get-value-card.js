/**
 * Obtener el valor de la carta.
 * @param {String} card
 * @returns {Number} Retorna el valor de la carta.
 */
export const getValueCard = (card) => {
  const value = card.substring(0, card.length - 1);

  if (!isNaN(value)) return value * 1;

  if (value === 'A') return 11;

  return 10;
};
