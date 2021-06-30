programa {
  funcao inicio() {
    inteiro num, contador, resultado
	
    escreva("Qual tabuada deseja calcular: ")
    leia(num)
    
    // vai executar até so contador for igual a 10
    para (contador = 0; contador <= 10; contador + 1) {
      resultado = num * contador
      escreva(num + " x " + contador + " = " + resultado + "\n")
    }
  }
}