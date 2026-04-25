// Recupera lista do localStorage ou cria vazio
let pessoas = JSON.parse(localStorage.getItem("curtidas")) || [];

// Atualiza texto ao carregar página
atualizarTexto();

function curtir() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    // Verifica se já existe
    if (!pessoas.includes(nome)) {
        pessoas.push(nome);

        // Salva no localStorage
        localStorage.setItem("curtidas", JSON.stringify(pessoas));
    }

    nomeInput.value = "";
    atualizarTexto();
}

function atualizarTexto() {
    let p = document.getElementById("resultado");

    if (pessoas.length === 0) {
        p.textContent = "Ninguém curtiu";
    } 
    else if (pessoas.length === 1) {
        p.textContent = `${pessoas[0]} curtiu`;
    } 
    else if (pessoas.length === 2) {
        p.textContent = `${pessoas[0]} e ${pessoas[1]} curtiram`;
    } 
    else {
        p.textContent = `${pessoas[0]}, ${pessoas[1]} e mais ${pessoas.length - 2} pessoas curtiram`;
    }
}

function limpar() {
    localStorage.removeItem("curtidas");
    pessoas = [];
    atualizarTexto();
}