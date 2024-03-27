Algoritmo "Exemplo 2 de sistema condicional encadeado"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Jailson Costa Santos
// Descrição   : exemplo de sistema condicional encadeado
// Autor(a)    : Eliana Almeida Nunes da Silva
// Data atual  : 20/03/2024
Var
   // Seção de Declarações das variáveis
   numero:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("digite um numero:")
   Leia(numero)
   Se numero=1 entao
      Escreval("Domingo")
      Se numero=2 entao
         Escreval("Segunda")
         Se numero=3 entao
            Escreval("Terça")
            Se numero=4 entao
               Escreval("Quarta")
               Se numero=5 entao
                  Escreval("Quinta")
                  Se numero=6 entao
                     Escreval("Sexta")
                     Se numero=7 entao
                        Escreval("Sabado")
                     Senao
                        Escreval("Numero correspondente não encontrado")
                        fimse
                        fimse
                        fimse
                        fimse
                        fimse
                        fimse
                        fimse
Fimalgoritmo