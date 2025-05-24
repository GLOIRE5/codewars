const input = document.getElementById('colorInput');

const defaultColor = 'white';

function isValidColor(color) {
  const test = document.createElement('div');
  test.style.color = color;
  return test.style.color !== '';

}

input.addEventListener('input', () => {
  const color = input.value.trim();
  if (isValidColor(color)) {
    document.body.style.backgroundColor = color;
  }
});

