// Captura dos elementos do HTML
const nomeInput = document.getElementById('nomeInput');
const btnCurtir = document.getElementById('btnCurtir');
const btnLimpar = document.getElementById('btnLimpar');
const resultado = document.getElementById('resultado');

// PASSO 1: Tenta carregar a lista do localStorage. Se não existir, cria um array vazio []
let curtidas = JSON.parse(localStorage.getItem('listaCurtidas')) || [];

// Função que analisa o array e altera o parágrafo de acordo com as regras do enunciado
function atualizarInterface() {
    const total = curtidas.length;

    if (total === 0) {
        resultado.textContent = "Ninguém curtiu";
    } else if (total === 1) {
        resultado.textContent = `${curtidas[0]} curtiu`;
    } else if (total === 2) {
        resultado.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        resultado.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`;
    }
}

// PASSO 2: Evento de clique no botão "Curtir"
btnCurtir.addEventListener('click', () => {
    const nome = nomeInput.value.trim();

    // Validação para não aceitar campo vazio
    if (nome === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    // Regra do enunciado: "verifique se o nome já está lá"
    if (!curtidas.includes(nome)) {
        curtidas.push(nome);

        // SALVAR NO LOCALSTORAGE: Transforma o array em string texto
        localStorage.setItem('listaCurtidas', JSON.stringify(curtidas));

        // Atualiza o texto na tela
        atualizarInterface();
    } else {
        alert('Este nome já curtiu!');
    }

    // Limpa o campo de digitação
    nomeInput.value = '';
    nomeInput.focus();
});

// PASSO 3: Evento de clique no botão "Limpar" (Requisito da nova questão)
btnLimpar.addEventListener('click', () => {
    curtidas = []; // Zera o array na memória
    localStorage.removeItem('listaCurtidas'); // Remove a lista salva no navegador
    atualizarInterface(); // Atualiza a tela para exibir "Ninguém curtiu"
});

// PASSO 4: Executa a função imediatamente ao carregar a página 
// Isso garante que os nomes salvos persistam se você recarregar a tela (F5)
atualizarInterface();