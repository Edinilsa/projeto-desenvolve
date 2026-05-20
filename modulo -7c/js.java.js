const btnBuscar = document.getElementById('btnBuscar');
const campoBusca = document.getElementById('campoBusca');
const listaUsuarios = document.getElementById('listaUsuarios');

async function pesquisarGithub() {
    const termo = campoBusca.value.trim();

    if (termo === "") {
        alert("Por favor, digite um nome para buscar.");
        return;
    }

    // Limpa a lista antes de começar
    listaUsuarios.innerHTML = "<p>Buscando...</p>";

    try {
        const response = await fetch(`https://api.github.com/search/users?q=${termo}`);
        const data = await response.json();

        listaUsuarios.innerHTML = ""; // Limpa o "Buscando..."

        if (data.items && data.items.length > 0) {
            // Se encontrou usuários, percorre o array e cria os elementos
            data.items.forEach(user => {
                const div = document.createElement('div');
                div.className = 'user-item';
                div.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}">
                    <a href="${user.html_url}" target="_blank">${user.login}</a>
                `;
                listaUsuarios.appendChild(div);
            });
        } else {
            // Caso não encontre nenhum usuário
            listaUsuarios.innerHTML = '<p class="msg-erro">Não foram encontrados usuários para esta pesquisa</p>';
        }

    } catch (error) {
        console.error("Erro na API:", error);
        listaUsuarios.innerHTML = '<p class="msg-erro">Erro ao conectar com o GitHub.</p>';
    }
}

// Evento de clique no botão
btnBuscar.addEventListener('click', pesquisarGithub);

// Permite buscar ao apertar "Enter" no teclado
campoBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        pesquisarGithub();
    }
});