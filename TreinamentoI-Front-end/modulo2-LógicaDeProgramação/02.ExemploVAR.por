/*
Módulo II - Variáveis e Operações
exemplo de variáveis
*/

programa {
	funcao inicio(){
		inteiro var1
		real 	var2
		cadeia	var3
		
		escreva("Por favor, digite um número inteiro: ")
		leia(var1)
		escreva("Agora digite um número real: ")
		leia(var2)
		escreva("Finalmente digite um texto: ")
		leia(var3)
		
		escreva("Você digitou os seguintes valores:\n")
		escreva(var1 + "\n" + var2 + "\n" + var3)
	}
}