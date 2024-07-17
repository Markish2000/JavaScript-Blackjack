import { createCardHTML, getCard, getValueCard } from './';

/**
 * Turno de la computadora.
 * @param {Number} minimumPoints Puntos mínimos que la computadora necesita para ganar.
 * @param {HTMLElement} pointsHTML Elemento HTML para mostrar los puntos.
 * @param {HTMLElement} divComputerCards Elemento HTML para mostrar las cartas.
 * @param {Array<String>} deck
 */
export const computerShift = (
  minimumPoints,
  pointsHTML,
  divComputerCards,
  deck = []
) => {
  if (minimumPoints) {
    let computerPoints = 0;

    do {
      const card = getCard(deck);

      computerPoints = computerPoints + getValueCard(card);
      pointsHTML.innerText = computerPoints;

      const imgCard = createCardHTML(card);
      divComputerCards.append(imgCard);

      if (minimumPoints > 21) break;
    } while (computerPoints < minimumPoints && minimumPoints <= 21);

    setTimeout(() => {
      if (computerPoints === minimumPoints) {
        alert('Nadie ha ganado la partida.');

        return;
      }

      if (minimumPoints > 21) {
        alert('La computadora gana la partida.');

        return;
      }

      if (computerPoints > 21) {
        alert('El jugador gana la partida.');

        return;
      }

      alert('La computadora gana la partida.');
    }, 100);
  }

  throw new Error('Los puntos mínimos son obligatorios.');
};
