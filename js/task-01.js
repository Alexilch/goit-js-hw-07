document.querySelectorAll(".item h2").forEach(ulCategories => 
console.log(`Категория: ${ulCategories.textContent}, Количество элементов: ${ulCategories.nextElementSibling.children.length}`))
