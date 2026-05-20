// --- LÓGICA DA LISTA DE TAREFAS ---
let tarefas = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskListDiv = document.getElementById('taskList');

addTaskBtn.onclick = () => {
    const desc = taskInput.value.trim();
    if (desc) {
        tarefas.push({ descricao: desc, status: false });
        taskInput.value = '';
        renderTasks();
    }
};

function renderTasks() {
    taskListDiv.innerHTML = '';
    tarefas.forEach((t, i) => {
        const item = document.createElement('div');
        item.className = 'task-item';
        
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = t.status;
        cb.onchange = () => {
            tarefas[i].status = cb.checked;
            renderTasks();
        };

        const span = document.createElement('span');
        span.className = t.status ? 'task-desc done' : 'task-desc';
        span.textContent = t.descricao;

        item.appendChild(cb);
        item.appendChild(span);
        taskListDiv.appendChild(item);
    });
}

// --- LÓGICA DO SISTEMA DE CURTIDAS ---
let curtidas = [];
const likeInput = document.getElementById('likeInput');
const likeBtn = document.getElementById('likeBtn');
const likeStatus = document.getElementById('likeStatus');

likeBtn.onclick = () => {
    const nome = likeInput.value.trim();
    if (nome && !curtidas.includes(nome)) {
        curtidas.push(nome);
        updateLikes();
    }
    likeInput.value = '';
};

function updateLikes() {
    const n = curtidas.length;
    if (n === 0) likeStatus.innerText = "Ninguém curtiu";
    else if (n === 1) likeStatus.innerText = `${curtidas[0]} curtiu`;
    else if (n === 2) likeStatus.innerText = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    else likeStatus.innerText = `${curtidas[0]}, ${curtidas[1]} e mais ${n - 2} pessoas curtiram`;
}