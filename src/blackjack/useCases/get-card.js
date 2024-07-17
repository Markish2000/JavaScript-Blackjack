/**
 * Esta función obtiene una carta.
 * @param {Array<String>} deck Es un arreglo de string.
 * @returns {String} Retorna la carta del deck.
 */
export const getCard = (deck) => {
  if (deck && deck.length > 0) {
    const card = deck.pop();

    return card;
  }

  throw new Error('No hay cartas en el deck.');
};
