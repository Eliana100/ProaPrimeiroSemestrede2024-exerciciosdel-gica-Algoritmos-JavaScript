Algoritmo "idade em dias"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Jailson Costa Santos
// Descrição   : Calcular quantas dias de vida você tem
// Autor(a)    : Eliana Almeida Nunes da Silva
// Data atual  : 20/03/2024
Var
// Seção de Declarações das variáveis 
 diasvividos,anos, meses, dias:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("digite o ano:")
Leia(anos)
Escreval("Digite o mês:")
Leia(meses)
Escreval("Digite o dia:")
Leia(dias)
diasvividos<-anos*365+meses*30+dias
Escreval("A quantidade de dias vividos é:",diasvividos)

Fimalgoritmo