// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


// const counterValue = document.getElementById('#value')
// const buttonDec = document.querySelector('[data-action="decrement"]')
// const buttonInc = document.querySelector('[data-action="increment"]')

let counterValue = 0;

const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

const increment = () => (spanValue.textContent = counterValue += 1);
const decrement = () => (spanValue.textContent = counterValue -= 1);

buttonDec.addEventListener("click", decrement);
buttonInc.addEventListener("click", increment);