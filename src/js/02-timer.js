import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  inputData: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let selectedDate = null;
let intervalId = null;
let currentDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onSetData(selectedDates);
  },
};

flatpickr('#datetime-picker', options);

function onSetData(selectedDates) {
  selectedDate = selectedDates[0].getTime();
  currentDate = new Date().getTime();
  if (selectedDate < currentDate) {
    refs.button.disabled = true;
    iziToast.show({
      title: 'Hey',
      message: 'Please choose a date in the future',
      position: 'topRight',
      progressBarColor: 'red',
    });
  } else {
    refs.button.disabled = false;
  }
}
refs.button.disabled = true;
refs.button.addEventListener('click', onStart);

function onStart() {
  iziToast.show({
    title: 'Hey',
    message: 'Timing is started ⏲️',
    position: 'topRight',
    progressBarColor: 'green',
  });

  intervalId = setInterval(() => {
    currentDate = new Date().getTime();
    const promoTime = selectedDate - currentDate;
    timerContent(convertMs(promoTime));
    refs.button.disabled = true;
    refs.inputData.disabled = true;

    if (selectedDate - currentDate < 1000) {
      clearInterval(intervalId);
      refs.inputData.disabled = false;
    }
  }, 1000);
}

function timerContent({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
