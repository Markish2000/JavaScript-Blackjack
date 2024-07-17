/**
 *
 * @param {String} card
 * @returns {HTMLImageElement} Retorna una imagen.
 */
export const createCardHTML = (card) => {
  if (card) {
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('carta');

    return imgCard;
  }

  throw new Error('La carta es un argumento obligatorio.');
};
