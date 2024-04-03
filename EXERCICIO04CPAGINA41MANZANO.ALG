Algoritmo "Exercicio04CPagina41Manzano"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson
// Descrição   : Ler quatro valores referentes a quatro notas escolares
// de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado,
// se o valor da média escolar for maior ou igual a 5. Se o aluno não
//foi aprovado, indicar uma mensagem informando esta condição.
// Apresentar junto das mensagens o valor da média do aluno para
//qualquer condição.
// Autor(a)    : Eliana Almeida Nunes Da Silva
// Data atual  : 03/04/2024
Var
   // Seção de Declarações das variáveis
   nota1,nota2,nota3,nota4,media:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("Digite a 1º nota :")
   Leia(nota1)
   Escreval("Digite a 2º nota :")
   Leia(nota2)
   Escreval("Digite a 3º nota :")
   Leia(nota3)
   Escreval("Digite a 4º nota :")
   Leia(nota4)
   media<-(nota1+nota2+nota3+nota4)/4
   se media>=5 entao
      Escreval("Aluno aprovado com média igual a : ",media)
   senao
      Escreval("Aluno reprovado com média igual a : ",media)
   fimse

Fimalgoritmo