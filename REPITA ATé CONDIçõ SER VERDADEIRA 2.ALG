Algoritmo "Repita até condiçõ ser verdadeira 2"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Jailson Costa Santos
// Descrição   : Exemplo Laço Repita até condiçõ ser verdadeira
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 03/04/2024
Var
// Seção de Declarações das variáveis 
contadora, somados: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
 contadora<-1
 Repita
 Se contadora MOD 2 = 0 entao
 somados<-somados+contadora
 Fimse
 contadora<-contadora+1
 ate contadora>500
 Escreval("O valor da soma dos pares de 1 a 500 é:",somados)

Fimalgoritmo