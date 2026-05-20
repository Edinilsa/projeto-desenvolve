// 1. Array de objetos Tarefa
let tarefas = [];

function adicionarTarefa() {
    const input = document.getElementById("campoTexto");
    const descricao = input.value.trim();

    if (descricao === "") return;

    // Criando o objeto com descrição e status (booleano)
    const novaTarefa = {
        descricao: descricao,
        status: false // Inicializa como Não Concluído
    };

    tarefas.push(novaTarefa);
    input.value = ""; // Limpa o campo após adicionar
    exibirTarefas();
}

// Função para alterar o status da tarefa no array
function alternarStatus(indice) {
    tarefas[indice].status = !tarefas[indice].status;
    exibirTarefas();
}

// 2. Função para atualizar a página (Laço de repetição)
function exibirTarefas() {
    const container = document.getElementById("listaContainer");
    container.innerHTML = ""; // Limpa antes de renderizar novamente

    tarefas.forEach((tarefa, indice) => {
        const div = document.createElement("div");
        div.className = "tarefa-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.onchange = () => alternarStatus(indice);

        const label = document.createElement("label");
        label.innerText = tarefa.descricao;
        
        // Aplica classe CSS se o status for true
        if (tarefa.status) {
            label.className = "concluida";
        }

        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    });
}