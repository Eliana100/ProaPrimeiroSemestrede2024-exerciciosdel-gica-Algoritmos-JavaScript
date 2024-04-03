Algoritmo "diferençadevalores"
// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa
// Descrição   : Le dois valores e exibir a diferença do maior pelo menor
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 03/04/2024
Var
   numero1,numero2:real
Inicio
   Escreval("Digite o primeiro número: ")
   leia(numero1)
   Escreval("Digite o segundo número: ")
   leia(numero2)
   se numero1>numero2 entao
      Escreval("A diferença do maior número pelo menor é de:",numero1-numero2)
   senao
      se numero2>numero1 entao
         Escreval("A diferença do maior número pelo menor é de:",numero2-numero1)
      senao
         Escreval("Os números digitados são iguais.")
      fimse
   fimse
Fimalgoritmo