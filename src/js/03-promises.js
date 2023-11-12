import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
  ev.preventDefault();

  let newDelay = Number(formEl.delay.value);
  for (let i = 1; i <= formEl.amount.value; i += 1) {
    createPromise(i, newDelay)
      .then(({ position, delay }) => {
        iziToast.show({
          title: 'Hey',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.show({
          title: 'Hey',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          position: 'topRight',
        });
      });
    newDelay += Number(formEl.step.value);
  }
  formEl.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
