import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = "feedback-form-state";
let formData = {};

saveData();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));    
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(localStorage.getItem(STORAGE_KEY)); 
    localStorage.removeItem(STORAGE_KEY);    
}

function saveData() {
    const savedFormDada = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormDada);

if (parsedFormData) {
      formData = parsedFormData;
      refs.input.value = formData.email || '';
      refs.textarea.value = formData.message || '';
    }
};