Algoritmo "diferen�adevalores"
// Disciplina   : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Costa
// Descri��o   : Le dois valores e exibir a diferen�a do maior pelo menor
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 03/04/2024
Var
   numero1,numero2:real
Inicio
   Escreval("Digite o primeiro n�mero: ")
   leia(numero1)
   Escreval("Digite o segundo n�mero: ")
   leia(numero2)
   se numero1>numero2 entao
      Escreval("A diferen�a do maior n�mero pelo menor � de:",numero1-numero2)
   senao
      se numero2>numero1 entao
         Escreval("A diferen�a do maior n�mero pelo menor � de:",numero2-numero1)
      senao
         Escreval("Os n�meros digitados s�o iguais.")
      fimse
   fimse
Fimalgoritmo