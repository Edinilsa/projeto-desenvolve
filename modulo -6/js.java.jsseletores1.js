// 1. Array de objetos para armazenar as tarefas
let tarefas = [];

// Seleção de elementos do DOM
const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefasElemento = document.getElementById('listaTarefas');

// 2. Função para adicionar nova tarefa ao array
function adicionarTarefa() {
    const descricao = inputTarefa.value.trim();

    if (descricao !== "") {
        // Criamos o objeto tarefa conforme solicitado
        const novaTarefa = {
            descricao: descricao,
            status: false // Começa como "Não concluído"
        };

        tarefas.push(novaTarefa);
        inputTarefa.value = ""; // Limpa o campo de texto
        renderizarTarefas();
    }
}

// 3. Função para alterar o status (boolean) entre concluído e não concluído
function alterarStatus(indice) {
    tarefas[indice].status = !tarefas[indice].status;
    renderizarTarefas();
}

// 4. Função para listar as tarefas usando forEach (laço de repetição)
function renderizarTarefas() {
    listaTarefasElemento.innerHTML = ""; // Limpa a lista antes de desenhar novamente

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        // Adiciona classe de fundo se estiver concluída
        li.className = `tarefa-item ${tarefa.status ? 'checked-bg' : ''}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.addEventListener('change', () => alterarStatus(index));

        const span = document.createElement('span');
        span.textContent = tarefa.descricao;
        
        // Aplica o estilo de riscado se o status for true
        if (tarefa.status) {
            span.classList.add('concluida');
        }

        li.appendChild(checkbox);
        li.appendChild(span);
        listaTarefasElemento.appendChild(li);
    });
}

// Evento de clique no botão Adicionar
btnAdicionar.addEventListener('click', adicionarTarefa);

// Atalho: permite adicionar ao pressionar "Enter"
inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});