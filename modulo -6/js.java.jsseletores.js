// Array para armazenar os nomes de quem curtiu
const nomes = [];

// Captura dos elementos do HTML
const inputNome = document.getElementById('nomeInput');
const btnCurtir = document.getElementById('btnCurtir');
const displayResultado = document.getElementById('resultado');

// Função principal disparada pelo clique
btnCurtir.addEventListener('click', () => {
    const nome = inputNome.value.trim();

    // 1. Validação: impede campo vazio
    if (nome === "") {
        alert("Por favor, introduza um nome.");
        return;
    }

    // 2. Validação: verifica se o nome já existe no array (ignora maiúsculas/minúsculas)
    const jaCurtiu = nomes.some(n => n.toLowerCase() === nome.toLowerCase());

    if (!jaCurtiu) {
        nomes.push(nome);
    } else {
        alert("Este nome já consta na lista de curtidas!");
    }

    // Limpa o input para a próxima entrada
    inputNome.value = "";

    // 3. Regras de exibição solicitadas
    const qtd = nomes.length;

    if (qtd === 0) {
        displayResultado.innerText = "Ninguém curtiu";
    } else if (qtd === 1) {
        displayResultado.innerText = `${nomes[0]} curtiu`;
    } else if (qtd === 2) {
        displayResultado.innerText = `${nomes[0]} e ${nomes[1]} curtiram`;
    } else {
        // Exemplo: "Ana, Bruno e mais 3 pessoas curtiram"
        displayResultado.innerText = `${nomes[0]}, ${nomes[1]} e mais ${qtd - 2} pessoas curtiram`;
    }
});