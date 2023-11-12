function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;
btnStop.toggleAttribute('disabled');

btnStart.addEventListener('click', onButton);
function onButton() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.toggleAttribute('disabled');
  btnStop.removeAttribute('disabled');
  //   btnStart.disabled = true;
  //   btnStop.disabled = false;
}

btnStop.addEventListener('click', offButton);
function offButton() {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled');
  btnStop.toggleAttribute('disabled');
  //   btnStart.disabled = false;
  //   btnStop.disabled = true;
}
