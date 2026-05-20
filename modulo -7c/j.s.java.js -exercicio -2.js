// Seleção dos elementos
const input = document.getElementById('nomeInput');
const btnCurtir = document.getElementById('btnCurtir');
const btnLimpar = document.getElementById('btnLimpar');
const msgParagrafo = document.getElementById('mensagem');

// 1. Carrega os dados salvos ou inicia um array vazio
let curtidas = JSON.parse(localStorage.getItem('listaCurtidas')) || [];

// 2. Função para atualizar o texto do parágrafo
function atualizarInterface() {
    const total = curtidas.length;

    if (total === 0) {
        msgParagrafo.innerText = "Ninguém curtiu";
    } else if (total === 1) {
        msgParagrafo.innerText = `${curtidas[0]} curtiu`;
    } else if (total === 2) {
        msgParagrafo.innerText = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        msgParagrafo.innerText = `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`;
    }
}

// 3. Lógica ao clicar em Curtir
btnCurtir.addEventListener('click', () => {
    const nome = input.value.trim();

    if (nome !== "" && !curtidas.includes(nome)) {
        curtidas.push(nome);
        
        // Salva o array atualizado no localStorage
        localStorage.setItem('listaCurtidas', JSON.stringify(curtidas));
        
        atualizarInterface();
        input.value = ""; 
    }
    input.focus();
});

// 4. Lógica ao clicar em Limpar
btnLimpar.addEventListener('click', () => {
    if (confirm("Deseja realmente limpar todas as curtidas?")) {
        curtidas = []; 
        localStorage.removeItem('listaCurtidas'); 
        atualizarInterface();
    }
});

// Inicializa a tela com os dados persistidos
atualizarInterface();