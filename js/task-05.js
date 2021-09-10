// let inputEl = document.querySelector('#name-input');
// inputEl.addEventListener('input', onInputChange);

// let outputEl = document.querySelector('#name-output');

// function onInputChange(event) {
//   inputEl = event.currentTarget.value;
//   console.log(inputEl);

//   inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'незнакомец';
// }

const inputEl = document.getElementById('name-input')
let outputEl = document.getElementById('name-output')

function onInputChange(text) {
    if (text.currentTarget.value === '') {
        outputEl.textContent = 'незнакомец'
    } else outputEl.textContent = text.currentTarget.value;
}

inputEl.addEventListener('input', onInputChange);