const inputField = document.querySelector('#validation-input');
const dataLength = inputField.getAttribute('data-length');

inputField.addEventListener('input', onInput);

function onInput (){
    if (inputField.value.length === Number(dataLength)){
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    }
    else{
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }}
