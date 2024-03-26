Algoritmo "Exemplo Desvio condicional composto encadeado"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Jailson Santos Costa
// Descrição   : Exemplo de desvio condicional composto encadeado
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 26/03/2024
Var
   // Seção de Declarações das variáveis
   idade:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
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