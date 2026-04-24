let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvar() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizar() {
    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;

        checkbox.onchange = () => {
            tarefas[index].status = checkbox.checked;
            salvar();
            renderizar();
        };

        const texto = document.createElement("span");
        texto.textContent = tarefa.descricao;

        if (tarefa.status) {
            texto.classList.add("concluida");
        }

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";

        btnExcluir.onclick = () => {
            tarefas.splice(index, 1);
            salvar();
            renderizar();
        };

        li.appendChild(checkbox);
        li.appendChild(texto);
        li.appendChild(btnExcluir);

        lista.appendChild(li);
    });
}

function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const descricao = input.value.trim();

    if (descricao === "") return;

    tarefas.push({
        descricao: descricao,
        status: false
    });

    input.value = "";
    salvar();
    renderizar();
}

