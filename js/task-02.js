const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().


const addItem = (array) => array.map(element => {
  const item = document.createElement('li')
  item.textContent = element
  return item
});
const itemLi = document.querySelector('#ingredients');
itemLi.append(...addItem(ingredients));
