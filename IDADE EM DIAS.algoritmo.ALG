Algoritmo "idade em dias"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Jailson Costa Santos
// Descri��o   : Calcular quantas dias de vida voc� tem
// Autor(a)    : Eliana Almeida Nunes da Silva
// Data atual  : 20/03/2024
Var
// Se��o de Declara��es das vari�veis 
 diasvividos,anos, meses, dias:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
Escreval("digite o ano:")
Leia(anos)
Escreval("Digite o m�s:")
Leia(meses)
Escreval("Digite o dia:")
Leia(dias)
diasvividos<-anos*365+meses*30+dias
Escreval("A quantidade de dias vividos �:",diasvividos)

Fimalgoritmo