
// pegar o input 
const readline = require('readline-sync');
const livros = require('./database'); // importando o arquivo (database.js) com os dados dos livros

const entradaInicial = readline.question('Deseja buscar um livro? (S/N): ');

// se a escolha for Sim, então mostra as categorias disponíveis e depois pergunta qual categoria escolhe
if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis: ');
  console.log('Suspense', '/', 'Romance', '/', 'Crime'); // apresentando as categorias disponíveis
  
  const entradaCategoria = readline.question('Qual categoria você escolhe (escreva a categoria exatamente como listado acima): ');
  const retorno = livros.filter(livro => livro.categoria === entradaCategoria); // filtrando a categoria conforme listada na tela
  
  console.table(retorno);
  // se a escolha for Não, então mostra todos os livros em ordem crescente por id
} else if (entradaInicial.toLocaleUpperCase() === 'N') {
  const livrosOrdenados = livros.sort((a, b) => a.id - b.id); // ordenando em ordem crescente por id

  console.log('Estes são todos os livros disponíveis: ');
  console.table(livrosOrdenados); // imprimindo os livros disponíveis em banco
} else {
  // mostra esta opção caso o solicitante tecle algo diferente de S ou N
  console.log("Escolha entre S para sim ou N para não!");
}