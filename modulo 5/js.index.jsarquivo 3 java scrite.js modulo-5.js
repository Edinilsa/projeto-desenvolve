let tarefas = [];

// Adicionar tarefa
function adicionarTarefa() {
    const input = document.getElementById("descricao");
    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const tarefa = {
        descricao: texto,
        status: false
    };

    tarefas.push(tarefa);
    input.value = "";

    atualizarLista();
}

// Atualizar lista
function atualizarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;

        checkbox.onclick = () => {
            tarefas[index].status = !tarefas[index].status;
            atualizarLista();
        };

        const texto = document.createElement("span");
        texto.textContent = tarefa.descricao;
        texto.className = tarefa.status ? "concluida" : "pendente";

        li.appendChild(checkbox);
        li.appendChild(texto);

        lista.appendChild(li);
    });
}