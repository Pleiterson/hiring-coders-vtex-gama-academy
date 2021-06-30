programa {
  funcao inicio() {
    inteiro num, contador, resultado

    escreva("Qual tabuada deseja calcular: ")
    leia(num)
    
    contador = 0 // se o contador for maior que 10, não vai executar o enquanto
    
    // só vai executar se a condição for verdadeiro
    enquanto (contador <= 10) {
      resultado = num * contador
      escreva(num + " x " + contador + " = " + resultado + "\n")
      contador = contador + 1
    }
  }
}