// 1. Criar array
let tarefas = [];

// 2. Criar função
function adicionarTarefa() {

    // 3. Pegar valor do input
    let texto = document.getElementById("descricao").value;

    // 4. Criar objeto
    let tarefa = {
        descricao: texto,
        status: false
    };

    // 5. Adicionar no array
    tarefas.push(tarefa);

    // 6. Atualizar tela
    atualizarLista();
}

// 7. Mostrar na tela
function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {

        let item = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.checked = tarefa.status;

        checkbox.onchange = function() {
            tarefas[index].status = checkbox.checked;
            atualizarLista();
        };

        let texto = document.createTextNode(tarefa.descricao);

        item.appendChild(checkbox);
        item.appendChild(texto);

        lista.appendChild(item);
    });
}