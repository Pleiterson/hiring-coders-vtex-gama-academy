/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a
em anos, meses e dias
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo
mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12
meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com
objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.

Link do site dos exercício: https://www.urionlinejudge.com.br/judge/pt/problems/view/1020
*/

programa {
	funcao inicio() {
		inteiro idade, qtAnos, qtMeses, qtDias, sobra
		
		// entrada: pegar a idade em dias
		escreva("Digite a idade em dias: ")
		leia(idade)
		
		// processamento: dividir a idade por 365 e obter a qtde de anos
		qtAnos = idade / 365

		// a partir da sobra da divisão anterior, fazer...
		sobra = idade % 365

		// dividir o valor que sobrou por 30 e obter a qtde de meses (1 mês = 30 dias)
		qtMeses = sobra / 30

		// finalmente pegar a sobra da divisão anterior, obtém qtde em dias
		qtDias = sobra % 30
		
		// saída: impressão dos dados processados
		escreva(qtAnos + " ano(s)\n")
		escreva(qtMeses + " mes(es)\n")
		escreva(qtDias + " dia(s)\n")
	}
}