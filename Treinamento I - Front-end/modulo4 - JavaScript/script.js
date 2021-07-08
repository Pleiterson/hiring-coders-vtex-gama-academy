// Aula 02: Variáveis
console.log("Aula 02: Variáveis");
console.log("Hello World!");

// uma boa prática é utilizar o nome das variáveis com os demais nomes em Maiúsculo conforme exemplo
// sempre utilizar o nome das variáveis conforme o que ela representa
// não utilizar palavras reservadas da linguagem para declaração das variáveis: function, console, etc...
var myName = "Pleiterson"; // declaração da variável myName do tipo string
console.log(myName);

let language = "JavaScript";
const pattern = "ECMAScript"

// escopo de variáveis
{
  var ageVar = 35;
  // let ageLet = Pleiterson;
}

console.log(ageVar); // consegue acessar a váriável ageVar fora do escopo em que ela foi declarada, consegue acessar devido ao hoisting
// console.log(ageLet); // não consegue acessar a váriável ageLet fora do escopo em que ela foi declarada

const myLastName = "Amorim";

// -------------------------------------------------------------------------------------------------------------------
// Aula 03: Tipos de Dados
console.log("Aula 03: Tipos de Dados");
// var myName = "Pleiterson"; // variável do tipo string
var age = 35; // variável do tipo number (inteiro)
var height = 1.68; // variável do tipo float, flutuante
var isStudent = true; // variável do tipo boolean, booleano

// valor null // variável com valores varios
// valor undefined // variável com valores indefinidos

// Objeto: é um mapeamento entre chaves e valores, as chaves são strings e os valores numéricos;
var person = {
  "name": "Pleiterson",
  "age": 32,
}

// Array: conjunto de informações que são representados também por listas ou conjuntos;
var students = ["Pleiterson", "Polliane", "Hugo", "Théo"]

// Function: é um objeto com uma capacidade de ser chamada e executada;
function sum(a, b) {
  return a + b;
}

// Operador typeof: informa qual o tipo de dados que referente determinada variável, objeto ou array;
console.log(typeof age);

// -------------------------------------------------------------------------------------------------------------------
// Aula 04: Operadores
console.log("Aula 04: Operadores");
// Aritméticos: adição (+), subtração (-), multiplicação (*), divisão (/), resto/mode (%), incremento (++), decremento (--)
var num1 = 10;
var num2 = 3;

console.log("A soma de " + num1 + " com " + num2 + " é: ", num1 + num2);
console.log("A subtração de " + num1 + " com " + num2 + " é: ", num1 - num2);
console.log("A multiplicação de " + num1 + " com " + num2 + " é: ", num1 * num2);
console.log("A divisão de " + num1 + " com " + num2 + " é: ", num1 / num2);
console.log("O resto de " + num1 + " com " + num2 + " é: ", num1 % num2);
console.log("O incremento de " + num1 + " é: ", ++num1, " soma 10 + 1");
console.log("O decremento de " + num2 + " é: ", --num2, " diminui 3 - 1");

// Atribuição: informa ao sistema que o determinado valor refere-se aquela variável, utiliza-se o igual (=);
var x = 1;
var y = 3;

console.log("Atribuição de Adição", x+=y);
console.log("Atribuição de Subtração", x-=y);
console.log("Atribuição de Multiplicação", x*=y);
console.log("Atribuição de Divisão", x/=y);
console.log("Atribuição de Resto", x%=y);

// Comparação: realiza a comparação de um tipo ou valor com outros. igual (==), valor e tipo (===), diferente (!=), menor ou menor igual(< ou <=) e maior ou maior igual (> ou >=);

// Lógicos: e and (&&), ou or (||), negação !

// -------------------------------------------------------------------------------------------------------------------
// Aula 05: Condicionais
console.log("Aula 05: Condicionais");
var num = 1;

num = 5;

// condição if e else
if (num === 1) {
  console.log("num é igual a 1"); // caso nao tivesse reatribuído 5 a num seria mostrado esta opção
} else if (num === 2) {
  console.log("num é igual a 2"); // só entra nesta condição se num = 2
} else {
  console.log("num é igual 5"); // só será mostrada esta opção caso tenha a retribuição de 5 a num
}

// condição switch case
var mes = "janeiro";

switch (mes) {
  case "fevereiro":
    console.log("mes 2");
    break; // utilizado para interromper a execução do bloco case "fevereiro"
  case "março":
    console.log("mes 3");
    break;
  case "janeiro":
    console.log("mes 1");
    break;
  default: // será executado caso nenhuma das condições cases acima for atendida
    console.log("nenhum caso acima foi atendido");
    break;
}

// -------------------------------------------------------------------------------------------------------------------
// Aula 06: Estruturas de Repetição
console.log("Aula 06: Estruturas de Repetição");
var colors = ["black", "white", "yellow", "green", "blue"];

console.log("Estruturas de repetição for");
// estrutura de repetição for (para)
for (var i = 0; i < colors.length; i++) { // realiza a condição até percorrer todo o array colors iniciando do índice zero, incrementa o índice no i++
  console.log(colors[i]); // imprimindo na tela todos os valores do array colors
}

// ou pode substituir o colors.length pela quantidade de itens que possui dentro do array
for (var i = 0; i < 5; i++) {
  console.log(colors[i]);
}

// imprimindo uma sequência de números até 4 a partir do zero
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// estrutura de repetição while (enquanto)
console.log("Estruturas de repetição while");

var i = 0;
while (i < 5) { // vai executar o while enquanto o 1 for menor que 5
  console.log(i); // imprime o valor atual de i
  i++; // incrementando o i a cada vez que o while é executado, caso não tiver, entra em loop infinito
}

// estrutura de repetição  do while (fazer enquanto)
console.log("Estruturas de repetição do while");

var i = 0;
do { // executa primeiro a estrutura de repetição para depois realizar a condição no while
  console.log(i); // imprime o valor atual de i
  i++; // incrementando o i a cada vez que é executado, caso não tiver, entra em loop infinito
} while (i < 5) // executa somente se 1 for menor que 5

// -------------------------------------------------------------------------------------------------------------------
// Aula 07: Funções
console.log("Aula 07: Funções");
// função não retorna nenhum valor, apenas imprime dos dados solicitados ao ser chamada
function sayHello(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

sayHello("Pleiterson", "Amorim"); // chamando a função sayHello()

// função que soma dois valores a e b
function sum(a, b) {
  return a + b; // somando os valores recebidos ao ser chamada e retornando para ser impressa na tela
}

console.log(sum(40,60)); // chamando a função sum() e imprimindo a soma dos valores repassados

// -------------------------------------------------------------------------------------------------------------------
// Aula 08: Classes
console.log("Aula 08: Classes");
class Book { // definição de classes
  // construtor da classe Book
  constructor(title, author, pages) {
    this.title = title; // this refere-se a classe
    this.author = author;
    this.pages = pages;
  }

  read() {
    return `Estou lendo ${this.title}`; // a crase é a interpolação, onde conseguimos passar uam string com a variável
  }
}

// orientação a objetos
let book = new Book("Anjos e Demônios", "Dan Brown", 770); // criando o objeto book da classe Book
let otherBook = new Book("A Menina que Roubava Livros", "Markus Zusak ", 545);

console.log(book); // retorna undefined caso não passarmos os valores na declaração do objeto
console.log(book.read()); // imprime o retorno do método read() "Estou lendo Anjos e Demônios"
console.log(otherBook); // retorna os valores na declaração do objeto
console.log(otherBook.read()); // imprime o retorno do método read() "Estou lendo A Menina que Roubava Livros"

class ITBook extends Book { // extends se refere que a classe ITBook utilizará as propriedades da classe Book
  constructor(title, author, pages, technology) {
    super(title, author, pages); // herdando as propriedades da classe Book, herança
    this.technology = technology;
  }
}

let itBook = new ITBook("Programando Em C/C++ - A Bíblia - O Melhor Guia Para Programacao Em C/C++", "Lars Jamsa, Kris Klander", 1032, "C/C++");

console.log(itBook);

class Person {
  constructor(name) {
    this._name = name; // _name diz a classe que a name não será privada
  }
  
  // encapsulamento
  get name() {
    return this._name; // get permite utilizar para pegar o nome em this._name assim será impresso na tela o nome
  }

  set name(value) {
    this._name = value; // set permite a alteração do valor _name
  }
}

let person = new Person("Pleiterson");
person.name = "Plei";
console.log(person.name);