import {
  computerShift,
  createDeck,
  createCardHTML,
  getCard,
  getValueCard,
} from './useCases';

let deck = [];
const typesCard = ['C', 'D', 'H', 'S'];
const typesSpecialCard = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
  computerPoints = 0;

const btnGet = document.querySelector('#btnGet');
const btnStop = document.querySelector('#btnStop');
const btnNew = document.querySelector('#btnNew');

const divPlayerCards = document.querySelector('#jugador-cartas');
const divComputerCards = document.querySelector('#computadora-cartas');

const pointsHTML = document.querySelectorAll('small');

deck = createDeck(typesCard, typesSpecialCard);

btnGet.addEventListener('click', () => {
  const card = getCard(deck);

  playerPoints = playerPoints + getValueCard(card);
  pointsHTML[0].innerText = playerPoints;

  const imgCard = createCardHTML(card);
  divPlayerCards.append(imgCard);

  if (playerPoints > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnGet.disabled = true;
    btnStop.disabled = true;
    computerShift(playerPoints, pointsHTML[1], divComputerCards, deck);
  }

  if (playerPoints === 21) {
    console.warn('21, genial!');
    btnGet.disabled = true;
    btnStop.disabled = true;
    computerShift(playerPoints, pointsHTML[1], divComputerCards, deck);
  }
});

btnStop.addEventListener('click', () => {
  btnGet.disabled = true;
  btnStop.disabled = true;

  computerShift(playerPoints, pointsHTML[1], divComputerCards, deck);
});

btnNew.addEventListener('click', () => {
  console.clear();
  deck = [];
  deck = createDeck(typesCard, typesSpecialCard);

  playerPoints = 0;
  computerPoints = 0;

  pointsHTML[0].innerText = 0;
  pointsHTML[1].innerText = 0;

  divComputerCards.innerHTML = '';
  divPlayerCards.innerHTML = '';

  btnGet.disabled = false;
  btnStop.disabled = false;
});
