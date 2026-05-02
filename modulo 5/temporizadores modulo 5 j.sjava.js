const dataFutura = new Date("2026-12-31T23:59:59");

function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const diferenca = dataFutura - agora;

    if (diferenca < 0) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    return { dias, horas, minutos, segundos };
}

function atualizarTemporizador() {
    const tempo = calcularTempoRestante(dataFutura);

    document.getElementById("dias").textContent = tempo.dias;
    document.getElementById("horas").textContent = tempo.horas;
    document.getElementById("minutos").textContent = tempo.minutos;
    document.getElementById("segundos").textContent = tempo.segundos;
}

setInterval(atualizarTemporizador, 1000);
atualizarTemporizador();

 node -v
 