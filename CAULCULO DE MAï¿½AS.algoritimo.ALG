Algoritmo "Caulculo de maças"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Jailson Santos Costa
// Descrição   : Caucular o valor comprado de maças
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 21/03/2024
Var
// Seção de Declarações das variáveis
valor, valortotal:real
preco:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
 Escreval("Digite quantas maças comprou:")
 Leia(valor)
 Se (valor > 12 ) entao
 valortotal<- 1.00*valor
 senao
 valortotal<- 1.30*valor
 Escreval("O preço total pago foi",valortotal)
 fimse
Fimalgoritmo