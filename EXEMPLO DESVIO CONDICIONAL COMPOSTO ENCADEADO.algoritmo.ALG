Algoritmo "Exemplo Desvio condicional composto encadeado"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Jailson Santos Costa
// Descri��o   : Exemplo de desvio condicional composto encadeado
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 26/03/2024
Var
   // Se��o de Declara��es das vari�veis
   idade:inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   Escreval("Digite sua idade:")
   Leia(idade)
   Se idade<16 entao
      Escreval ("Voce nao pode votar :(")
   Senao
      Se idade<18 entao
         Escreval ("Voto e opcional")
      Senao
         Escreval ("O voto e obrigatorio")
      fimse
      fimse
Fimalgoritmo