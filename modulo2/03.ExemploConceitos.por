// Programa que calcula a média de duas notas

programa {
	funcao inicio() {
		real nota1, nota2, media
		
		escreva("Digite a nota1: ")
		leia(nota1)
		escreva("Digite a nota2: ")
		leia(nota2)
		
		se (media >= 9 e media <= 10) { // testando se é conceito A
			escreva("Conceito A")
		}
		senao { // ainda pode ser B, C, D ou R
			se (media >= 8 e media < 9) { // testando se é conceito B
				escreva("Conceito B")
			}
			senao { // ainda pode ser C, D ou R
				se (media >= 6 e media < 8) { // testando se é conceito C
					escreva("Conceito C")
				}
				senao { // ainda pode ser D ou R
					se (media >= 5 e media < 6) { // testando se é conceito D
						escreva("Conceito D")
					}
					senao { // se não for A, B, C ou D é R
						escreva("reprovado")
					}
				}
			}
		}
	}
}