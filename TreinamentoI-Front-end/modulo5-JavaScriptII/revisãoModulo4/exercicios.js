// Exercício 1: Vamos criar variaveis usando let, const e var, atribuir valores, identificar comportamentos e saídas quando tentarmos recuperar.
// Exercício 2: Vamos criar variaveis usando let, const e var, atribuir strings e vamos concatenar e interpolar.
// Exercício 3: Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos.
// Exercício 4: Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?
// Exercício 5: Faça um programa que peça dois números e imprima no console a soma desses dois números.
// Exercício 6: Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?
// Exercício 7: Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros.
// Exercício 8: Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de trânsito.
/* Exercício 9: Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'
para números divisíveis por 3 e 5, para números divisíveis por 3 irá imprimir 'Fizz' e para números divisíveis por
5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número. */
// Exercício 10: Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.
// Exercício 11: Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.
// Exercício 12: Crie uma função que determina se um número é par ou impar.
// Exercício 13: Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

// Exercício 14: Imprima na tela os números pares existentes entre 0 e 100.
let cont = 0;
while (cont <= 100) {
  if (cont % 2 === 0)
    console.log(cont);
  cont++;
}

// -------------------------------------------------------------------------------------------------------------------
// Exercício 15: Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.
// Exercício 16: Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6
// Exercício 17: Crie uma função que recebe 2 parâmetros e retorna a multiplicação entre else.
// Exercício 18: Crie uma função que calcula 5% de desconto retornando o valor do desconto.
// Exercício 19: Crie uma função que irá converter uma quantia de real para dólar utilizando a cotação do dia.
/* Exercício 20: Utilize a estrutura de repetição for para imprimir no console conforme instruções:
a) números de 1 a 50  
b) quando chegar no número 25 interrompa a instrução e pare o loop 
c) quando chegar no número 10 pule a instrução */
// Exercício 21: Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".
/* Exercício 22: Vamos criar uma conta bancária com as 3 operações básicas? rs
a) A conta deverá iniciar com o saldo de 100
b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
c) Deverá ser possível passar 1 valor para a operação escolhida
d) Deverá retornar o resultado e imprimir no console o saldo atual */
// Exercício 23: Crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituídos pela palavra "PULOU".
// Exercício 24: Crie um algoritmo que converte dias em horas, quando recebe um número de dias.
/* Exercício 25: Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso,
se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par. */
/* Exercício 26: Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo:
a) números de 1 a 100  
b) quando chegar no número 50 interrompa a instrução e pare o loop 
c) quando chegar no número 50 pule a instrução */
/* Exercício 27: Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs
a) Deverá ser possível escolher uma operação aritmética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
b) Deverá ser possível passar 2 números para a operação escolhida
c) Deverá retornar o resultado e imprimir no console */
// Exercício 28: Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.
// Exercício 29: Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.
// Exercício 30: Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// Exercício 31: Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.
/* Exercício 32: Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais,
mostre uma mensagem no console "Os números são iguais". */
// Exercício 33: Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
// -------------------------------------------------------------------------------------------------------------------
/* Exercicio 34: Crie um algoritmo que receba três notas de um aluno,
calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
- Se a media for igual ou maior que 7 - Aprovado
- Se a media for maior e igual a cinco e menor que 7 - Recuperação
- Se a media for menor que 5 - Reprovado */
function calculaMedia(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3

  if (media >= 7) {
    return "Aluno Aprovado";
  } else if ((media >= 5) && (media < 7)) {
    return "Aluno em Recuperação";
  } else {
    return "Aluno Reprovado";
  }
}

console.log(calculaMedia(6, 7, 8)); // Aluno Aprovado
console.log(calculaMedia(6, 7, 2)); // Aluno em Recuperação
console.log(calculaMedia(3, 4, 2)); // Aluno Reprovado

// -------------------------------------------------------------------------------------------------------------------
// Exercício 35: Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.