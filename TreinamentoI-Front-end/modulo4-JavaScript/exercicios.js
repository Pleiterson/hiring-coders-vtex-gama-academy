// FizzBuzz

let resultado = fizzBuzz(20);
console.log(resultado);

function fizzBuzz(entrada) {
  // verifica se o valor de entrada é um número ou outro tipo de dado
  if (typeof entrada !== "number")
    return "Não é um número";

  // verifica se o valor da entrada é divisível por 3 e 5
  if ((entrada % 3 === 0) && (entrada % 5 === 0))
    return "FizzBuzz";

  // verifica se o valor da entrada é divisível por 3
  if (entrada % 3 === 0)
    return "Fizz";

  // verifica se o valor da entrada é divisível por 5
  if (entrada % 5 === 0)
    return "Buzz";

  // se não cair em nenhuma das condições acima retorne o valor de entrada
  return entrada;
}

// -------------------------------------------------------------------------------------------------------------------
// Reverse a string
let newStr = "";

function reverseString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
    console.log(newStr); // para imprimir apenas a string revertida, só colocar o console fora do for
  }
}

let result = reverseString("Pleiterson");

// -------------------------------------------------------------------------------------------------------------------
// Conversor de Celsius para Fahrenheit
function convertToFahrenheit(value) {
  return (value * 1.8) + 32;
}

let res = convertToFahrenheit(40);
console.log(`O valor em Fahrenheit é: ${res}`);

// -------------------------------------------------------------------------------------------------------------------
// To Do List
const listContainer = document.querySelector('[data-lists]'); // acessando o documento html div data-lists
const newListForm = document.querySelector('[data-new-list-form]'); // acessando o documento html form data-new-list-form
const newListInput = document.querySelector('[data-new-list-input]'); // acessando o documento html input data-new-list-input

let lists = [];

// toda vez que o navegador recebe um submit a página é atualizada, com a função abaixo recuperamos as informações
newListForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const listName = newListInput.value;

  // sempre que o input estiver vazio (null), não inclua nada na lista
  if ((listName === null) || (listName === ''))
    return;
  
  const list = createList(listName); // criando a lista na div com as informações do input
  newListInput.value = null; // limpando o input após inserir o dado na lista
  lists.push(list); // incluindo o valor do input no array lists
  render(); // chamando a função render para mostrar os itens na div
});

// criando o elemento com os dados na tela
function createList(name) {
  return {
    id: Date.now().toString(),
    name: name
  }
}

// mostrando as informações adicionadas no array lists na div
function render() {
  clearElement(listContainer); // chamando a função clearElement();
  lists.forEach(function(list) { // percorrendo o vetor com os valores do input
    const item = document.createElement('li');

    item.classList.add('item'); // criando a classe do item
    item.innerText = list.name;
    listContainer.appendChild(item); // inserindo os valores na div class "to-dos"
  });
}

// remove primeiro elemento do array para evitar a repetição ao ser exibido os itens na div
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}