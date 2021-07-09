// Programa que calcula a média de duas notas

programa {
	funcao inicio() {
		real nota1, nota2, media
		
		escreva("Digite a nota1: ")
		leia(nota1)
		escreva("Digite a nota2: ")
		leia(nota2)
		
		media = (nota1 + nota2) / 2
		
		escreva("A média vale: " + media + "\n")
		
		// instrução de decisão deve ser mais intuitiva possível
		se (media >= 6.0) {
			escreva("Parabéns! Você foi aprovado(a)!\n")
		}
		senao {
			escreva("Obaa nos vemos ano que vem!")
		}
		
		escreva("Fim do programa\n")
	}
}