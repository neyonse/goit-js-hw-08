import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const refs = {
  email: form.querySelector('input[name="email"]'),
  message: form.querySelector('textarea[name="message"]'),
};

const STORAGE_FORM_KEY = 'feedback-form-state';
const formData = {};
const storedData = localStorage.getItem(STORAGE_FORM_KEY);

window.addEventListener('load', loadFormState);
form.addEventListener('input', collectFormData);
form.addEventListener('submit', onFormSubmit);

function loadFormState() {
  if (storedData !== null) {
    try {
      const parsedData = JSON.parse(storedData);
      fillForm(parsedData);
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
      console.log(
        'We apologise, there is no stored data or the stored data has been corrupted. Please, fill out the form again.'
      );
    }
  }
}

function fillForm({ email, message }) {
  refs.email.value = email;
  refs.message.value = message;
}

const throttledSaveFormData = throttle(saveFormData, 500);

function collectFormData() {
  formData.email = refs.email.value.trim();
  formData.message = refs.message.value.trim();
  throttledSaveFormData();
}

function saveFormData() {
  localStorage.setItem(STORAGE_FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.email.value === '' || refs.message.value === '') {
    alert('Please fill in all the fields!');
    const fieldToFocus = refs.email.value === '' ? refs.email : refs.message;
    fieldToFocus.focus();
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_FORM_KEY);
  form.reset();
}
