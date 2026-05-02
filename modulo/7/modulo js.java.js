let feed = [];

// 🔽 postar
async function postar() {
    let texto = document.getElementById("textoPost").value;

    if (texto.trim() === "") {
        alert("Digite algo!");
        return;
    }

    // pegar imagem de gatinho
    let resposta = await fetch("https://api.thecatapi.com/v1/images/search");
    let dados = await resposta.json();
    let imagemGato = dados[0].url;

    let novoPost = {
        data: new Date(),
        usuario: "Edinilsa",
        avatar: "https://i.pravatar.cc/40",
        texto: texto,
        imagem: imagemGato,
        likes: 0
    };

    feed.push(novoPost);

    document.getElementById("textoPost").value = "";

    renderizarFeed();
}

// 🔽 renderizar
function renderizarFeed() {
    let container = document.getElementById("feed");
    container.innerHTML = "";

    // ordenar mais recente → mais antigo
    let feedOrdenado = [...feed].sort((a, b) => b.data - a.data);

    feedOrdenado.forEach((post, index) => {

        let div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <div class="usuario">
                <img src="${post.avatar}" class="avatar">
                <strong>${post.usuario}</strong>
            </div>

            <p>${post.texto}</p>

            <img src="${post.imagem}">

            <p>Likes: ${post.likes}</p>

            <button onclick="curtir(${index})">Curtir</button>
        `;

        container.appendChild(div);
    });
}

// 🔽 curtir
function curtir(index) {
    // como usamos ordenação, precisamos pegar o post correto
    let feedOrdenado = [...feed].sort((a, b) => b.data - a.data);
    let postClicado = feedOrdenado[index];

    // encontrar no array original
    let original = feed.find(p => p.data === postClicado.data);

    original.likes++;

    renderizarFeed();
}