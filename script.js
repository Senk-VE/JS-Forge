const display = document.getElementById('display');

const appendToDisplay = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = '';
};

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
};
