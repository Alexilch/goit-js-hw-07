let counterValue = 0;

const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

const increment = () => (spanValue.textContent = counterValue += 1);
const decrement = () => (spanValue.textContent = counterValue -= 1);

buttonDec.addEventListener("click", decrement);
buttonInc.addEventListener("click", increment);