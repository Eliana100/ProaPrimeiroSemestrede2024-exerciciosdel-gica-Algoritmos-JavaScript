Algoritmo "Caulculo de ma�as"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Jailson Santos Costa
// Descri��o   : Caucular o valor comprado de ma�as
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 21/03/2024
Var
// Se��o de Declara��es das vari�veis
valor, valortotal:real
preco:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
 Escreval("Digite quantas ma�as comprou:")
 Leia(valor)
 Se (valor > 12 ) entao
 valortotal<- 1.00*valor
 senao
 valortotal<- 1.30*valor
 Escreval("O pre�o total pago foi",valortotal)
 fimse
Fimalgoritmo