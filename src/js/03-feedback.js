const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

const form = {};

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

refs.feedbackForm.addEventListener(
  'input',
  throttle(formInputFieldHandler, 500)
);
refs.feedbackForm.addEventListener('submit', submitFormHandler);

populateInputs();

function formInputFieldHandler(e) {
  console.log('Input');
  form[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
}

function submitFormHandler(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    alert(`Увага! Всі поля мають бути заповнені.`);
  } else {
    console.log(form);

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function populateInputs() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

  const { email, message } = refs.feedbackForm.elements;

  if (savedForm) {
    email.value = savedForm.email || '';
    message.value = savedForm.message || '';
  }
}
