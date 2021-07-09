// Aula 02: Tamplete String
let role = "dedicado";

// imprimindo um dado na tela concatenando com uma variável
console.log("Pleiterson é " + role);

// imprimindo de forma interpolada
console.log(`Pleiterson é ${role}`);

// -------------------------------------------------------------------------------------------------------------------
// Aula 03: Operador ternário
// if...else
let age = 35;

// forma tradicional de escrever um if else
if (age >= 18) {
  console.log('Maior de idade. (if tradicional)');
} else {
  console.log('Menor de idade. (if tradicional)');
}

function calculaIdade(age2) {
  // forma resumida de escrever um if else, operador ternário
  // primeiro realiza a condição, depois do sinal ? coloca o retorno quando for verdadeiro a condição e depois do sinal : coloca o retorno falso
  return age2 >= 18 ? 'Maior de idade. (if ternário)' : 'Menor de idade. (if ternário)';
}

console.log(calculaIdade(age));

// -------------------------------------------------------------------------------------------------------------------
// Aula 04: Arrow Functions
// como é a sintaxe de uma função tradicional
function soma(a, b) {
  return a + b;
}

console.log(soma(3, 5)); // imprime 8

// como é a sintaxe de uma arrow function
const sum = (n1, n2) => n1 + n2;
console.log(sum(10, 3)) // imprime 13

const sayHello = name => `Hello ${name}`;
console.log(sayHello('Pleiterson')); // imprime "Hello Pleiterson"

// -------------------------------------------------------------------------------------------------------------------
// Aula 05: Arrays, Spread & Métodos
// declaração de um array
const alunosGama = ["Pleiterson", "Polliane", "Hugo", "Théo"];

console.log(alunosGama[3]); // acessando a informação de um array, no caso o dado do índice 3 Théo

// operador spread (...)
const alunosXp = [...alunosGama, "Luke"];

console.log(alunosXp);

// métodos de iteração
// desta forma conseguimos percorrer todo o array alunosXp
// for (let i = 0; i < alunosXp.length; i++) {
//   console.log(alunosXp[i]);
// }

// método map: percorre todo o array alunosXp
alunosXp.map(aluno => console.log(aluno));

// método filter: filtra todos os itens de um array conforme condição de uma função
const numeros = [34, 45, 67, 90, 55, 76];

const numerosImpares = numeros.filter(numero => numero % 2 != 0); // filtrando os números ímpares do array numeros
console.log(numerosImpares); // imprimindo os números ímpares

const numerosPares = numeros.filter(numero => numero % 2 == 0); // filtrando os números pares do array numeros
console.log(numerosPares); // imprimindo os números pares

// método find: busca um determinado item de um array conforme condição
const produtos = ["geladeira", "fogão", "cama", "mesa"];

const encontraCama = produtos.find(produto => produto === "cama"); // encontrando o item cama no array produtos
console.log(encontraCama); // imprimindo o item encontrado, cama

const encontraMesa = produtos.find(produto => produto === "mesa"); // encontrando o item mesa no array produtos
console.log(encontraMesa); // imprimindo o item encontrando, mensa

// método sort: ordena os item de um array em ordem crescente
const numerosOrdenadosCrescente = numeros.sort(); // ordenando em ordem crescente o array numeros
console.log(numerosOrdenadosCrescente); // imprimindo o array numeros ordenado

const numerosOrdenadosDecrescente = numeros.sort((a, b) => b - a); // ordenando em ordem decrescente o array numeros
console.log(numerosOrdenadosDecrescente); // imprimindo o array numeros ordenado

// método reduce: reduz nosso array a um resultado de uma operação matemática
const numbers = [1, 34, 35];

const soma1 = numbers.reduce((valorAnterior, valorAtual) => { // repassando os valores do array para a operação matemática
  return valorAnterior + valorAtual; // somando os itens do array (soma os itens e não os índices)
})

console.log(soma1) // imprime 70

// -------------------------------------------------------------------------------------------------------------------
// Aula 06: Objetos Destructuring
const pessoa = {
  nome: "Pleiterson",
  idade: 35,
  cidade: "Belo Horizonte"
};

// notação de ponto: acessa o nome da variável pessoa.nome
console.log(pessoa.nome); // imprime Pleiterson

// notação de colchetes: acessa a idade da pessoa['idade']
console.log(pessoa['idade']); // imprime 35

// como desestruturar objetos: primeiro passa as propriedades para depois definir o nome da variável
const {nome, idade, cidade} = pessoa;

console.log(nome); // acessa diretamente a propriedade ao invés da variável pessoa. imprime Pleiterson
console.log(idade); // acessa diretamente a propriedade ao invés da variável pessoa. imprime 35
console.log(cidade); // acessa diretamente a propriedade ao invés da variável pessoa. imprime Belo Horizonte

// array de objetos, filmes
const filmes = [
  { 
    id: 1,
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    descricao: "Na Segunda Era da Terra-média, o Senhor das Trevas Sauron forja o Um Anel na intenção de distribuir poderes e dominar, através do artefato, os senhores dos Elfos, Anões e dos Homens.",
    duracao: 178
  },
  { 
    id: 2,
    titulo: "O Senhor dos Anéis: As Duas Torres",
    descricao: "Após a aparente morte de Gandalf, a Sociedade do Anel se dissolve e Frodo e Sam seguem em direção à Montanha da Perdição para destruir o Um Anel.",
    duracao: 179
  },
  { 
    id: 3,
    titulo: "O Senhor dos Anéis: O Retorno do Rei",
    descricao: "Gandalf lidera Aragorn, Legolas, Gimli e Théoden rumo a Isengard, onde encontram Merry e Pippin. Com a queda de Saruman, Gandalf descobre através de seu palantír que Sauron planeja destruir a cidade nobre de Minas Tirith e parte na tentativa de alertar seus governantes.",
    duracao: 201
  },
];

// desestruturando o array filmes
const [{id, titulo, descricao, duracao}] = filmes;

filmes.map(filme => console.log(filme.titulo)); // percorrendo todo o array filmes e imprimindo o titulo dos filmes
filmes.map(filme => console.log(filme.descricao)); // percorrendo todo o array filmes e imprimindo a descrição dos filmes