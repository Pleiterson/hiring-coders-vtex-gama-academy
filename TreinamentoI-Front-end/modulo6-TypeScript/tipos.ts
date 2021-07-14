// boolean
const contaPaga: boolean = false;

// number
const idade: number = 35;
const nota: number = 4.5;

// string
const nome: string = 'Pleiterson Amorim';

// array
const idades: number[] = [23, 28, 35, 45];
const age: Array<number> = [23, 28, 35, 45];

// tuple
let jogadores: [string, string, string];
jogadores = ['Pleiterson', 'Hugo', 'Théo'];

let gamer: [string, number, boolean];
gamer = ['Pleiterson', 35, true];

// enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}
const statusDaAprovacao = StatusAprovacao.Aprovado;

// any aceita qualquer coisa
const retornoAPI: any[] = [123, 'Pleiterson', true];
const retornoAPI2: any = {
  // várias informações no objeto
}

// void função que não tem retorno
function printarTela(msg: string): void {
  console.log(msg);
}

// null e undefined
const u: undefined = undefined;
const n: null = null;

// object tipo não primitivo
function criar(objeto: object) {
  // ...
}
criar({
  propriedade: 1,
});
// criar('Pleiterson') // dá erro

// never
function loopInfinito(): never {
  while(true); // vai sempre executar
}

function erro(mensagem: string): never {
  throw new Error(mensagem); // sempre vai mostrar a mensagem
}

function falha() { // é do tipo never, pois chama uma função do tipo never
  return erro('Algo falhou!');
}

// union types
const num: string | number = 5;

function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// alias
type Funcionario = {
  nome: string,
  sobrenome: string,
  dataNascimento: Date,
}

// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
  nome: 'Pleiterson',
  sobrenome: 'Mello',
  dataNascimento: new Date(),
},{
  nome: 'Hugo',
  sobrenome: 'Costa',
  dataNascimento: new Date(),
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log('Nome do funcionário: ', funcionario.nome)
  }
}

// type Funcionarios = Array<string>;
// const funcionarios: Funcionarios = ['Pleiterson', 'Hugo', 'Théo'];

// function tratarFuncionarios(funcionarios: Funcionarios) {
//   // ...
// }

// Valores nulos ou opcionais
let altura: number | null = 1.6; // definindo o tipo da variável altura
altura = null; // alterando o valor de altura

type Contato = {
  nome: string,
  telefone1: string,
  telefone2?: string // o ? informa ao typescript que este campo é opcional
}

const contato: Contato = {
  nome: 'Pleiterson',
  telefone1: '123456',
}

// Type Assertion
const minhaIdade: any = 35;

// aqui informamos ao typescript que o resultado de minhaIdade vai ter um retorno number mesmo tendo declarado como any
(minhaIdade as number).toString(); // e entao conseguimos transformá-lo em string
// <number>minhaIdade.toString(); // também pode ser feito desta forma o type assertion

// outro exemplo
const input = document.getElementById("numero1") as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById("numero1"); // também pode ser feito desta forma o type assertion
console.log(input.value);