// O Array de objetos conforme solicitado
let tarefas = [];

const inputTarefa = document.getElementById('taskInput');
const botaoAdicionar = document.getElementById('addButton');
const containerLista = document.getElementById('taskList');

// Função para adicionar nova tarefa
function adicionarTarefa() {
    const descricao = inputTarefa.value.trim();

    if (descricao !== "") {
        const novaTarefa = {
            descricao: descricao,
            status: false // Inicializa como não concluída
        };

        tarefas.push(novaTarefa);
        inputTarefa.value = "";
        renderizar();
    }
}

// Função para alternar o status (boolean)
function alternarStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    renderizar();
}

// Função para atualizar a tela
function renderizar() {
    containerLista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const div = document.createElement('div');
        div.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.onchange = () => alternarStatus(index);

        const span = document.createElement('span');
        span.textContent = tarefa.descricao;
        // Aplica a classe CSS criativa se status for true
        span.className = tarefa.status ? 'task-text completed-text' : 'task-text';

        div.appendChild(checkbox);
        div.appendChild(span);
        containerLista.appendChild(div);
    });
}

// Eventos
botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarTarefa();
});