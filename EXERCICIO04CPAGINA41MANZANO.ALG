Algoritmo "Exercicio04CPagina41Manzano"
// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson
// Descri��o   : Ler quatro valores referentes a quatro notas escolares
// de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado,
// se o valor da m�dia escolar for maior ou igual a 5. Se o aluno n�o
//foi aprovado, indicar uma mensagem informando esta condi��o.
// Apresentar junto das mensagens o valor da m�dia do aluno para
//qualquer condi��o.
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 03/04/2024
Var
   // Se��o de Declara��es das vari�veis
   nota1,nota2,nota3,nota4,media:real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   Escreval("Digite a 1� nota :")
   Leia(nota1)
   Escreval("Digite a 2� nota :")
   Leia(nota2)
   Escreval("Digite a 3� nota :")
   Leia(nota3)
   Escreval("Digite a 4� nota :")
   Leia(nota4)
   media<-(nota1+nota2+nota3+nota4)/4
   se media>=5 entao
      Escreval("Aluno aprovado com m�dia igual a : ",media)
   senao
      Escreval("Aluno reprovado com m�dia igual a : ",media)
   fimse

Fimalgoritmo