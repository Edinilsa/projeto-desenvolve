// Função Soma
const soma = (num1, num2) => num1 + num2; {
    
}

// Função Subtrai
const subtrai = (num1, num2) => num1 - num2;

// Função Multiplica
const multiplica = (num1, num2) => num1 * num2;

// Função Divide
const divide = (num1, num2) => num1 / num2;

// Função MostraResultado
const mostraResultado = (num1, num2) => {
    console.log(`[Soma] entre ${num1} e ${num2}:`, soma(num1, num2));
    console.log(`[Subtração] entre ${num1} e ${num2}:`, subtrai(num1, num2));
    console.log(`[Multiplicação] entre ${num1} e ${num2}:`, multiplica(num1, num2));
    console.log(`[Divisão] entre ${num1} e ${num2}:`, divide(num1, num2));
};

// Teste da função
mostraResultado(10, 5);