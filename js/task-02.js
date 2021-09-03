const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const addItem = (array) => array.map(element => {
  const item = document.createElement('li')
  item.textContent = element
  return item
});
const itemLi = document.querySelector('#ingredients');
itemLi.append(...addItem(ingredients));
