import { Notify } from 'notiflix/build/notiflix-notify-aio';

const conteiner = document.querySelector('.js-conteiner');
const start = document.querySelector('.js-start');
start.addEventListener('click', onClick);
function onClick() {
  const arr = [];
  const childlength = conteiner.children.length;
  for (let i = 0; i < childlength; i += 1) {
    const itemEl = conteiner.children[i];
    itemEl.textContent = '';
    createPromise('😎', '😡', i * 500)
      .then(resp => {
        markField(itemEl, resp);
        arr.push(1);
      })
      .catch(lost => {
        markField(itemEl, lost);
        arr.push(0);
      })
      .finally(() => {
        setTimeout(() => {
          if (arr.length === childlength) {
            const isWinner = arr.every(item => item);

            if (isWinner) {
              Notify.success('Winner');
            } else {
              Notify.failure('loser');
            }
          }
        }, 100);
      });
  }
}
function markField(item, smile) {
  item.textContent = smile;
}

function createPromise(win, lose, delay) {
  const promise = new Promise((res, rej) => {
    const random = Math.random() > 0.5;
    setTimeout(() => {
      if (random) {
        res(win);
      } else {
        rej(lose);
      }
    }, delay);
  });
  return promise;
}
