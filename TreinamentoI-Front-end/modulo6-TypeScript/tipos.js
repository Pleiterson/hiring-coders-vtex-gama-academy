"use strict";
// boolean
var contaPaga = false;
// number
var idade = 35;
var nota = 4.5;
// string
var nome = 'Pleiterson Amorim';
// array
var idades = [23, 28, 35, 45];
var age = [23, 28, 35, 45];
// tuple
var jogadores;
jogadores = ['Pleiterson', 'Hugo', 'Théo'];
var gamer;
gamer = ['Pleiterson', 35, true];
// enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// any aceita qualquer coisa
var retornoAPI = [123, 'Pleiterson', true];
var retornoAPI2 = {
// várias informações no objeto
};
// void função que não tem retorno
function printarTela(msg) {
    console.log(msg);
}
// null e undefined
var u = undefined;
var n = null;
// object tipo não primitivo
function criar(objeto) {
    // ...
}
criar({
    propriedade: 1,
});
// criar('Pleiterson') // dá erro
// never
function loopInfinito() {
    while (true)
        ; // vai sempre executar
}
function erro(mensagem) {
    throw new Error(mensagem); // sempre vai mostrar a mensagem
}
function falha() {
    return erro('Algo falhou!');
}
// union types
var num = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
// type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Pleiterson',
        sobrenome: 'Mello',
        dataNascimento: new Date(),
    }, {
        nome: 'Hugo',
        sobrenome: 'Costa',
        dataNascimento: new Date(),
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
// type Funcionarios = Array<string>;
// const funcionarios: Funcionarios = ['Pleiterson', 'Hugo', 'Théo'];
// function tratarFuncionarios(funcionarios: Funcionarios) {
//   // ...
// }
// Valores nulos ou opcionais
var altura = 1.6; // definindo o tipo da variável altura
altura = null; // alterando o valor de altura
var contato = {
    nome: 'Pleiterson',
    telefone1: '123456',
};
// Type Assertion
var minhaIdade = 35;
// aqui informamos ao typescript que o resultado de minhaIdade vai ter um retorno number mesmo tendo declarado como any
minhaIdade.toString(); // e entao conseguimos transformá-lo em string
// <number>minhaIdade.toString(); // também pode ser feito desta forma o type assertion
// outro exemplo
var input = document.getElementById("numero1");
// const input = <HTMLInputElement>document.getElementById("numero1"); // também pode ser feito desta forma o type assertion
console.log(input.value);
