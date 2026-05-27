/* --- LÓGICA JAVASCRIPT --- */

// 1. Array de objetos Tarefa (propriedades: descricao [string] e status [boolean])
let tarefas = [
    { descricao: "Aprender a manipular o DOM", status: false },
    { descricao: "Entregar a atividade do GitHub", status: false }
];

// Seleção dos elementos do HTML que vamos manipular
const inputDescricao = document.getElementById("input-descricao");
const btnAdicionar = document.getElementById("btn-adicionar");
const listaTarefasContainer = document.getElementById("lista-tarefas");

// 2. Função para atualizar a tela (renderizar a sequência de checkboxes e descrições)
function renderizar() {
    // Limpa o container para não duplicar itens na tela
    listaTarefasContainer.innerHTML = "";

    // Percorre o array de objetos usando o index para saber qual item é qual
    tarefas.forEach((tarefa, index) => {
        // Cria a div que envolve o checkbox e o texto
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("tarefa-item");

        // Se o status do objeto for true, aplica a classe CSS de concluída
        if (tarefa.status) {
            itemDiv.classList.add("concluida");
        }

        // Cria o checkbox correspondente
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status; // Define se começa marcado (true) ou desmarcado (false)

        // Evento para alterar o status da respectiva tarefa ao clicar no checkbox
        checkbox.addEventListener("change", () => {
            // Inverte o booleano (se for false vira true, se for true vira false)
            tarefas[index].status = !tarefas[index].status; 
            renderizar(); // Atualiza a tela para aplicar o novo estilo visual do CSS
        });

        // Cria o texto com a descrição da tarefa
        const spanTexto = document.createElement("span");
        spanTexto.textContent = tarefa.descricao;

        // Une os elementos construídos dentro da div do item
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(spanTexto);

        // Insere o item estruturado final dentro da página HTML
        listaTarefasContainer.appendChild(itemDiv);
    });
}

// 3. Função para incluir nova tarefa no array (inicializa o status como false)
btnAdicionar.addEventListener("click", () => {
    const texto = inputDescricao.value.trim();

    // Validação para não aceitar tarefas vazias
    if (texto === "") {
        alert("Por favor, digite uma descrição para a tarefa.");
        return;
    }

    // Adiciona o novo objeto tarefa no array
    tarefas.push({
        descricao: texto,
        status: false // Todo cadastro novo começa como Não Concluído (false)
    });

    inputDescricao.value = ""; // Limpa o campo de texto após adicionar
    renderizar(); // Atualiza a tela com o novo elemento inserido
});

// Executa a renderização inicial ao carregar a página
renderizar();