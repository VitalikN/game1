import { Notify } from 'notiflix/build/notiflix-notify-aio';

const content = document.querySelector('.content');
const KEY_X = 'keyX';
const KEY_O = 'keyO';
const CURRENT_PLAYER = 'player';

let player = localStorage.getItem(CURRENT_PLAYER) || 'X';
let markup = '';
let stepX = JSON.parse(localStorage.getItem(KEY_X)) || [];
let stepO = JSON.parse(localStorage.getItem(KEY_O)) ?? [];
const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

for (let i = 1; i <= 9; i += 1) {
  markup += `<div class = "item" data-id = '${i}'></div>`;
}

content.insertAdjacentHTML('beforeend', markup);

content.addEventListener('click', onClick);

function onClick(evt) {
  if (!evt.target.textContent) {
    const id = Number(evt.target.dataset.id);

    if (player === 'X') {
      stepX.push(id);
      localStorage.setItem(KEY_X, JSON.stringify(stepX));
      const isWinner = checkWinner(stepX);
      evt.target.textContent = player;
      if (stepX.length === 5) {
        Notify.warning('Draw');
        setTimeout(() => {
          reset();
        }, 1000);
        return;
      }
      if (isWinner) {
        Notify.success(`${player}, isWinner`);
        setTimeout(() => {
          reset();
        }, 1000);
        return;
      }
    } else {
      stepO.push(id);
      localStorage.setItem(KEY_O, JSON.stringify(stepO));
      const isWinner = checkWinner(stepO);
      evt.target.textContent = player;
      if (isWinner) {
        Notify.success(`${player}, isWinner`);
        setTimeout(() => {
          reset();
        }, 1000);
        return;
      }
    }

    player = player === 'X' ? 'O' : 'X';
    localStorage.setItem(CURRENT_PLAYER, player);
  }
}

function checkWinner(arr) {
  const result = win.some(val => val.every(value => arr.includes(value)));
  return result;
}

function reset() {
  content.innerHTML = markup;
  localStorage.clear();
  player = 'X';
  stepO = [];
  stepX = [];
}
(function () {
  try {
    [...content.children].forEach(item => {
      const id = Number(item.dataset.id);
      if (stepX.includes(id)) {
        item.textContent = 'X';
      } else if (stepO.includes(id)) {
        item.textContent = 'O';
      }
    });
  } catch (e) {
    console.log('localStorage empty');
  }
})();
