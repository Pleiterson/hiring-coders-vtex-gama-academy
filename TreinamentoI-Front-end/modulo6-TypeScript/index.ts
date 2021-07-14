// no typescript é necessário informar o tipo dos parâmetros ao cria a função
function somar(num1: number, num2: number) {  
  return num1 + num2;
}

// const number1 = '10'; // se passar os valores em string o typescript vai informar que não vai ser possível usar a função soma que usa dois tipos numéricos
// const number2 = '5'; // se passar os valores em string o typescript vai informar que não vai ser possível usar a função soma que usa dois tipos numéricos

const number1 = 10;
const number2 = 5;

const result = somar(number1, number2);
console.log(result);