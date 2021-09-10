
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

// const ulEl = document.querySelector('#ingredients');

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.innerHTML = list;

const ingredientsList = document.querySelector(`#ingredients`);

const ulEl = (array) => {
    const listArray = array.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
    })
    ingredientsList.append(...listArray);
}
ulEl(ingredients);