const inputNumber = document.querySelector('#controls input');
const createButton = document.querySelector('button[data-action="render"]');
const clearButton = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => createBoxes(inputNumber.value));
clearButton.addEventListener('click', clearBoxes);

function createBoxes(amount) {
    let genCollection = [];
    for (let i = 0; i < amount; i += 1) {
        const collection = document.createElement('div');

        collection.style.width = `${30 + i * 10}px`;
        collection.style.height = `${30 + i * 10}px`;

        const r = Math.floor(Math.random() * (256));
        const g = Math.floor(Math.random() * (256));
        const b = Math.floor(Math.random() * (256));
        const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        collection.style.backgroundColor = color;
        genCollection.push(collection);
    }
    boxes.prepend(...genCollection);
}

function clearBoxes() {
    boxes.innerHTML = '';
}
