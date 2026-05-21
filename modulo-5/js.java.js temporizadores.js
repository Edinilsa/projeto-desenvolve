// 1. Função para calcular o tempo restante
function calcularTempoRestante(dataFutura) {
    const agora = new Date().getTime(); // Data e hora atual em milissegundos
    const destino = new Date(dataFutura).getTime(); // Data futura em milissegundos
    const diferenca = destino - agora;

    // Se a data já passou
    if (diferenca <= 0) {
        return null;
    }

    // Cálculos matemáticos para converter milissegundos em dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

// 2. Função para atualizar o temporizador e exibir no console
function atualizarTemporizador() {
    const dataAlvo = "2026-12-31T23:59:59"; // Defina aqui a data futura (AAAA-MM-DDTHH:MM:SS)
    const tempo = calcularTempoRestante(dataAlvo);

    if (tempo) {
        console.clear(); // Limpa o console para parecer um relógio fixo
        console.log(`Contagem Regressiva para: ${dataAlvo}`);
        console.log(`Tempo restante: ${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`);
    } else {
        console.log("A contagem regressiva terminou!");
        clearInterval(intervalo); // Para o temporizador
    }
}

// 3. Use setInterval para atualizar a cada 1 segundo (1000 milissegundos)
const intervalo = setInterval(atualizarTemporizador, 1000);

// Execução imediata para não esperar o primeiro segundo do intervalo
atualizarTemporizador();