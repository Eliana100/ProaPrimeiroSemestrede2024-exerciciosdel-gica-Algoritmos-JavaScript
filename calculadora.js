
//exercicios Faacat
// Ler dois valores inteiros e apresentar o resultado da diferença do maior pelo menor valor

function diferença() {
    let valor1 = parseInt(prompt("Digite um valor: "))
    let valor2 = parseInt(prompt("Digite outro valor: "))
    let diferença = valor1 - valor2;
    let diferença2 = valor2 - valor1

    if (valor1 > valor2) {
        alert(`A diferença entre os dois números é de: ${diferença}`)
    } else {
        alert(`A diferença entre os dois números é de: ${diferença2}`)
    }
}

//outra forma de escrever o código
function diferença2() {
    let valor1 = parseInt(prompt("Digite um valor: "))
    let valor2 = parseInt(prompt("Digite outro valor: "))
    let diferença = Math.abs(valor1 - valor2);

    alert(`A diferença entre os dois números é de: ${diferença}`)
}

//calcular a area de um retangulo
function areaRetangulo() {
    let base = parseInt(prompt("Digite a base do retangulo: "))
    let altura = parseInt(prompt("Digite a altura do retangulo: "))
    let area = base * altura

    alert(`A area do retangulo é ${area}`)
}

//Calcular a idade em dias
function calcularIdadeEmDias() {
    let anos = parseInt(prompt("Digite a idade em anos: "))
    let meses = parseInt(prompt("Digite a idade em meses: "))
    let dias = parseInt(prompt("Digite a idade em dias: "))

    // Converter anos e meses para dias
    let idadeEmDias = (anos * 365) + (meses * 30) + dias

    alert(`A idade total em dias é: ${idadeEmDias} dias.`)
}

//Escreva um algoritmo para ler o número total de eleitores de um município
function calcularPercentuais() {
    let totalEleitores = parseInt(prompt("Digite o número total de eleitores: "))
    let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "))
    let votosNulos = parseInt(prompt("Digite o número de votos nulos: "))
    let votosValidos = parseInt(prompt("Digite o número de votos válidos: "))

    let percentualBrancos = (votosBrancos / totalEleitores) * 100
    let percentualNulos = (votosNulos / totalEleitores) * 100
    let percentualValidos = (votosValidos / totalEleitores) * 100

    alert(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);//usar toFixed() ajuda a apresentar os percentuais de uma maneira mais amigável ao usuário.
    alert(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);//sem toFixed(), um percentual como 25.123456789 seria exibido como 25.123456789%, enquanto com toFixed(2), seria exibido como 25.12%, o que é mais fácil de entender e visualizar.
    alert(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
}

//ler o salário mensal atual de um funcionário e o percentual de reajuste.
function calcularNovoSalario() {

    let salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário: "));
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%): "));

    let valorReajuste = salarioAtual * (percentualReajuste / 100);

    let novoSalario = salarioAtual + valorReajuste;

    alert(`O novo salário do funcionário será de R$ ${novoSalario.toFixed(2)}`);
}


function calcularCustoFinal() {
    let custoDeFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));


    let percentualDistribuidor = 0.28;
    let percentualImpostos = 0.45;

    let custoComDistribuidor = custoDeFabrica + (custoDeFabrica * percentualDistribuidor);
    let custoFinal = custoComDistribuidor + (custoComDistribuidor * percentualImpostos);

    alert(`O custo final ao consumidor será de R$ ${custoFinal.toFixed(2)}`);
}



function calcularSalarioFinal() {
    // Ler o número de carros vendidos, o valor total das vendas, o salário fixo e o valor por carro vendido
    let numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "));
    let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas: "));
    let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "));
    let valorPorCarroVendido = parseFloat(prompt("Digite o valor recebido por carro vendido: "));

    let comissaoFixaPorCarro = numeroCarrosVendidos * valorPorCarroVendido;

    let comissaoVariavel = valorTotalVendas * 0.05;

    let salarioFinal = salarioFixo + comissaoFixaPorCarro + comissaoVariavel;

    alert(`O salário final do vendedor é de R$ ${salarioFinal.toFixed(2)}`);
}

//ler se o valor é maior que 10 ou menor que 10
function maiorque10() {
    let valor = parseInt(prompt("Digite um valor: "))
    if (valor > 10 ){
        alert("O valor é maior que 10!")
    } else {
        alert("O valor não é maior que 10.")
    }
}


// identificar se o numero é negativo ou positivio
function PositivoOuNegativo() {
    let numero = parseInt(prompt("Digite um valor negativo ou positivo: "));
    if (numero < 0) {
        alert("O número é negativo!");
    } else if (numero > 0) {
        alert("O número é positivo!");
    } 
}

//calcular preço das maçãs
function calcularCustoTotal() {
    let quantidadeMaças = parseInt(prompt("Digite o número de maçãs compradas: "));

    let precoPorMaça;
    if (quantidadeMaças < 12) {
        precoPorMaça = 1.30;
    } else {
        precoPorMaça = 1.00;
    }

    let custoTotal = quantidadeMaças * precoPorMaça;

    alert(`O custo total da compra é R$ ${custoTotal}`);
}

//calcular media do aluno
function verificarAprovacao() {
    let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação: "));
    let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação: "));

    let media = (nota1 + nota2) / 2;

    let mensagem;
    if (media >= 6) {
        mensagem = "Parabéns! Você foi aprovado!";
    } else {
        mensagem = "Infelizmente, você foi reprovado.";
    }

    alert(`Sua média é: ${media}\n${mensagem}`);
}


//Verificar se pode votar
function verificarVotacao() {
    let idade = parseInt(prompt("Digite sua idade: "));

    if (idade >= 18) {
        alert("O voto é obrigatório!");
    } else if (idade >= 16) {
        alert("O voto é opcional!");
    } else {
        alert("Você ainda não pode votar!");
    }
}


// Ler o valor e mostrar o seu antecessor
function antecessor() {
    let valor = parseInt(prompt("Digite um valor: "))

let antecessor = valor - 1

alert(`O antecessor de ${valor} é ${antecessor}`)
}

// Ler o valor e mostrar o seu sucessor
function sucessor() {
    let valor = parseInt(prompt("Digite um valor: "))
    let sucessor = valor + 1

    alert(`O antecessor de ${valor} é ${sucessor}`)
}
// Ler o custo de fábrica do carro
function custofinal(){
let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));

const percentualDistribuidor = 0.28; 
const percentualImpostos = 0.45;

let custoDistribuidor = custoFabrica * percentualDistribuidor;
let custoImpostos = custoFabrica * percentualImpostos;
let custoFinal = custoFabrica + custoDistribuidor + custoImpostos;
alert(`O custo final é ${custoFinal}`)
}

//calcular o salario final do vendedor
function salario() {
let numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "));
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas: "));

let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "));

let valorPorCarroVendido = parseFloat(prompt("Digite o valor recebido por carro vendido: "));

let comissaoTotal = valorTotalVendas * 0.05;

let salarioFinal = salarioFixo + (numeroCarrosVendidos * valorPorCarroVendido) + comissaoTotal;

alert("O salário final do vendedor é: R$" + salarioFinal.toFixed(2));
}
// Função para calcular o custo total da compra de maçãs
function calcularCustoMaças(numeroMaças) {
    if (numeroMaças < 12) {
        return numeroMaças * 1.30; 
    } else {
        return numeroMaças * 1.00; 
    }


let numeroMaças = parseInt(prompt("Digite o número de maçãs compradas: "));

let custoTotal = calcularCustoMaças(numeroMaças);

alert("O custo total da compra é: R$" + custoTotal.toFixed(2));
}

// Passo 3: Verificar se o aluno foi aprovado
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;


let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação: "));
let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação: "));

let media = calcularMedia(nota1, nota2);

let mensagem;
if (media >= 6) {
    mensagem = "Parabéns! Você foi aprovado.";
} else {
    mensagem = "Infelizmente você não foi aprovado.";
}

alert("Sua média é: " + media.toFixed(2) + "\n" + mensagem);
}

// Função para encontrar o maior valor entre dois números
function encontrarMaior(valor1, valor2) {
    if (valor1 > valor2) {
        return valor1;
    } else {
        return valor2;
    }

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));

let valor2 = parseFloat(prompt("Digite o segundo valor: "));

let maior = encontrarMaior(valor1, valor2);

alert("O maior valor é: " + maior);
}
// Escrever os valores em ordem crescente
function ordemCrescente() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    if (valor1 > valor2) {
        let temp = valor1;
        valor1 = valor2;
        valor2 = temp;
    }

    alert("Os valores em ordem crescente são: " + valor1 + " e " + valor2);
}

// Calcular a duração do jogo de xadrez
function calcularDuracaoJogo() {
    let horaInicio = parseInt(document.getElementById("horaInicio").value);
    let horaFim = parseInt(document.getElementById("horaFim").value);
    let duracao;

    if (horaInicio < horaFim) {
        duracao = horaFim - horaInicio;
    } else {
        duracao = (24 - horaInicio) + horaFim;
    }

    alert("A duração do jogo foi de " + duracao + " horas.");
}

// Função para calcular o salário total do funcionário
function calcularSalarioTotal(horasTrabalhadas, salarioPorHora) {
    const horasSemanais = 40;
    let salarioTotal;

    // Verificar se houve horas extras
    if (horasTrabalhadas > horasSemanais) {
        const horasExtras = horasTrabalhadas - horasSemanais;
        const valorHoraExtra = salarioPorHora * 1.5; // Acréscimo de 50% para horas extras
        const salarioHoraExtra = horasExtras * valorHoraExtra;
        salarioTotal = (horasSemanais * salarioPorHora) + salarioHoraExtra;
    } else {
        // Se não houver horas extras, o salário total é apenas o salário das horas regulares
        salarioTotal = horasTrabalhadas * salarioPorHora;
    }

    return salarioTotal;
}

function exibirSalario() {
    let horasTrabalhadas = parseInt(document.getElementById("horasTrabalhadas").value);
    let salarioPorHora = parseFloat(document.getElementById("salarioPorHora").value);
    let salarioTotal = calcularSalarioTotal(horasTrabalhadas, salarioPorHora);
    alert("O salário total do funcionário é: R$" + salarioTotal.toFixed(2));
}




























//teste em aula

function calculadora() {
    let idade = parseInt(prompt("Qual é a sua idade"));
    let habilitacao = parseInt(prompt("Você é habilitada? \n 1 - Sim ou 2 - Não"));

    if (idade >= 18 && habilitacao === 1) {
        alert("Você é habilitada e tem idade suficiente para isso");
    } else {
        alert("Você não é habilitada e não tem idade suficiente para isso");
    }
}

function inverteLógica() {
    let idade = parseInt(prompt("Qual é a sua idade"));
    let habilitacao = parseInt(prompt("Você é habilitada? \n 1 - Sim ou 2 - Não"));

    if (! (idade >= 18 || habilitacao === 1))// utilizando o "!" você iverte a lógica, tirando isso ele segue a lógica normalmente
     {
        alert("Você é habilitada e tem idade suficiente para isso");
    } else {
        alert("Você não é habilitada e/ou não tem idade suficiente para isso");
    }
}
