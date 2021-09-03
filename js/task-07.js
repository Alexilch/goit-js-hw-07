const controlSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
controlSize.value = 16;
// console.log(controlSize.value);
controlSize.addEventListener('input', onInput);
function onInput() {
    textSize.style.fontSize = controlSize.value + 'px';
}
