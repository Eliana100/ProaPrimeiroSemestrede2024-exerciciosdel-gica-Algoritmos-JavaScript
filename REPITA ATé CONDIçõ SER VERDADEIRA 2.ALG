Algoritmo "Repita at� condi�� ser verdadeira 2"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Jailson Costa Santos
// Descri��o   : Exemplo La�o Repita at� condi�� ser verdadeira
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 03/04/2024
Var
// Se��o de Declara��es das vari�veis 
contadora, somados: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
 contadora<-1
 Repita
 Se contadora MOD 2 = 0 entao
 somados<-somados+contadora
 Fimse
 contadora<-contadora+1
 ate contadora>500
 Escreval("O valor da soma dos pares de 1 a 500 �:",somados)

Fimalgoritmo