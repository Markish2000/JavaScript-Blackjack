import _ from 'underscore';

/**
 * Esta función crea un nuevo deck.
 * @param {Array<String>} typesCard Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} typesSpecialCard Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas.
 */
export const createDeck = (typesCard, typesSpecialCard) => {
  if (
    typesCard &&
    typesCard.length > 0 &&
    typesSpecialCard &&
    typesSpecialCard.length > 0
  ) {
    let deck = [];

    for (let i = 2; i <= 10; i++) {
      for (let type of typesCard) {
        deck.push(i + type);
      }
    }

    for (let type of typesCard) {
      for (let typeSpecialCard of typesSpecialCard) {
        deck.push(typeSpecialCard + type);
      }
    }

    deck = _.shuffle(deck);

    return deck;
  }

  throw new Error('Los tipos de cartas son obligatorios.');
};
