<script>
    // 1. O "Banco de Dados" (Array de Objetos)
    let feedData = [];

    const btnPostar = document.getElementById('btn-postar');
    const inputTexto = document.getElementById('texto-post');
    const feedContainer = document.getElementById('feed');

    // 2. Função para buscar a foto de gato da API
    async function buscarGatinho() {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        return data[0].url;
    }

    // 3. Função para renderizar a tela
    function renderizarFeed() {
        feedContainer.innerHTML = ''; // Limpa a tela

        // Organiza do mais novo para o mais antigo
        const ordenado = [...feedData].reverse();

        ordenado.forEach(post => {
            const div = document.createElement('div');
            div.className = 'post-card';
            div.innerHTML = `
                <div class="post-header">
                    <img src="${post.avatar}" class="avatar">
                    <strong>${post.usuario}</strong>
                </div>
                <p>${post.texto}</p>
                <img src="${post.imagemGato}" class="cat-pic">
                <div>
                    <button class="btn-curtir" onclick="curtir(${post.id})">
                         ${post.likes}
                    </button>
                </div>
            `;
            feedContainer.appendChild(div);
        });
    }

    // 4. Evento de Postar
    btnPostar.addEventListener('click', async () => {
        const texto = inputTexto.value;
        if(texto === "") return alert("Escreva algo!");

        const urlGato = await buscarGatinho();

        const novoPost = {
            id: Date.now(),
            usuario: "@EuMesmo",
            avatar: "https://i.pravatar.cc/100",
            texto: texto,
            imagemGato: urlGato,
            likes: 0,
            data: new Date()
        };

        feedData.push(novoPost);
        inputTexto.value = ''; // Limpa o campo
        renderizarFeed();
    });

    // 5. Função de Curtir
    window.curtir = (id) => {
        const post = feedData.find(p => p.id === id);
        if(post) {
            post.likes++;
            renderizarFeed();
        }
    }
</script>