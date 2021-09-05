const inputField = document.querySelector('#validation-input');
const dataLength = inputField.getAttribute('data-length');

inputField.addEventListener('input', onInput);

function onInput (){
    inputField.classList.add('invalid')

    if (inputField.value.length === Number(dataLength)){       
        inputField.classList.replace('invalid', 'valid');}
    else {
        inputField.classList.replace('valid','invalid');
    }}