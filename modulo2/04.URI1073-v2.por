/*
Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares,
de 1 até N, inclusive N, se for o caso.

Entrada
A entrada contém um valor inteiro N (5 < N < 2000).

Saída
Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006
ao invés de 1000000 o que ocasionará resposta errada. Neste caso, configure a
precisão adequadamente para que isso não ocorra.

Link do site dos exercício: https://www.urionlinejudge.com.br/judge/pt/problems/view/1073
*/

programa {
	funcao inicio() {
		inteiro n, numero

		escreva("Digite o número final: ")
		leia(n)
		
		para (numero = 2; numero <= n; numero = numero + 1) {
			escreva(numero + "^2 = " + (numero * numero) + "\n")
		}
	}
}