document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('select');
  const inputElem = document.getElementById('input');
  const resultElem = document.getElementById('result');
  const calcBtn = document.getElementById('calcBtn');

  calcBtn.addEventListener('click', calcResult);
  select.addEventListener('change', () => {
    updatePlaceholder();
    updateMethodDesc();
  });

  function calcResult() {
    const selected = select.value;
    const inputValue = parseInt(inputElem.value);

    if (isNaN(inputValue)) {
      resultElem.textContent = '';
      return;
    }

    const methodMap = {
      'Math.floor': () => Math.floor(inputValue),
      'Math.random': () => Math.random() * inputValue,
      'Math.round': () => Math.round(inputValue),
      'Math.ceil': () => Math.ceil(inputValue),
      'Math.pow': () => Math.pow(inputValue, parseInt(prompt('Enter the exponent:'))),
      'Math.sqrt': () => Math.sqrt(inputValue),
      'Math.abs': () => Math.abs(inputValue),
      'Math.max': () => Math.max(inputValue, 0),
      'Math.min': () => Math.min(inputValue, 100)
    };

    resultElem.textContent = methodMap[selected]?.() || '';
  }
});

function focusCalcBtn() {
  calcBtn.focus();
}
