// Funções de operação (Arrow Functions)
const soma = (num1, num2) => num1 + num2;
const subtrai = (num1, num2) => num1 - num2;
const multiplica = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Função para exibir os resultados (MostraResultado)
function mostraResultado(num1, num2) {
    // O formato solicitado: console.log([nome] entre ${num1} e ${num2}, fn(num1, num2))
    console.log(`Soma entre ${num1} e ${num2}:`, soma(num1, num2));
    console.log(`Subtração entre ${num1} e ${num2}:`, subtrai(num1, num2));
    console.log(`Multiplicação entre ${num1} e ${num2}:`, multiplica(num1, num2));
    console.log(`Divisão entre ${num1} e ${num2}:`, divide(num1, num2));
}

// Exemplo de execução
mostraResultado(10, 5);