// Array de tarefas
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Elementos
const inputDescricao = document.getElementById("descricao");
const botaoAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("listaTarefas");

// Função para salvar no localStorage
function salvarTarefas() {

    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );
}

// Função para mostrar tarefas
function renderizarTarefas() {

    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, indice) => {

        // Criar li
        const li = document.createElement("li");

        // Div da tarefa
        const divTarefa = document.createElement("div");
        divTarefa.classList.add("tarefa");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;

        // Texto
        const texto = document.createElement("span");
        texto.textContent = tarefa.descricao;

        // Se estiver concluída
        if (tarefa.status) {
            texto.classList.add("concluida");
        }

        // Alterar status
        checkbox.addEventListener("change", () => {

            tarefas[indice].status = checkbox.checked;

            salvarTarefas();
            renderizarTarefas();
        });

        // Botão excluir
        const botaoExcluir = document.createElement("button");

        botaoExcluir.textContent = "Excluir";

        botaoExcluir.classList.add("excluir");

        // Evento excluir
        botaoExcluir.addEventListener("click", () => {

            tarefas.splice(indice, 1);

            salvarTarefas();
            renderizarTarefas();
        });

        // Montagem
        divTarefa.appendChild(checkbox);
        divTarefa.appendChild(texto);

        li.appendChild(divTarefa);
        li.appendChild(botaoExcluir);

        listaTarefas.appendChild(li);
    });
}

// Adicionar tarefa
botaoAdicionar.addEventListener("click", () => {

    const descricao = inputDescricao.value.trim();

    if (descricao !== "") {

        const novaTarefa = {
            descricao: descricao,
            status: false
        };

        tarefas.push(novaTarefa);

        salvarTarefas();
        renderizarTarefas();

        inputDescricao.value = "";
    }
});

// Mostrar tarefas ao abrir a página
renderizarTarefas();