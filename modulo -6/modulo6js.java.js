let tarefas = [];

function adicionarTarefa() {
    let input = document.getElementById("inputTarefa");

    if (input.value === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let tarefa = {
        descricao: input.value,
        status: false
    };

    tarefas.push(tarefa);
    input.value = "";

    mostrarTarefas();
}

function mostrarTarefas() {
    let lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach((t, i) => {
        let div = document.createElement("div");
        div.className = "tarefa";

        if (t.status) {
            div.classList.add("concluida");
        }

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = t.status;

        checkbox.onchange = function () {
            tarefas[i].status = checkbox.checked;
            mostrarTarefas();
        };

        div.appendChild(checkbox);
        div.appendChild(document.createTextNode(" " + t.descricao));

        lista.appendChild(div);
    });
}


node-V
