const formPost = document.getElementById("formPost");
const textoPost = document.getElementById("textoPost");
const feed = document.getElementById("feed");

/* ARRAY DE POSTS */
let posts = [];

/* EVENTO DO FORMULÁRIO */
formPost.addEventListener("submit", async (event) => {

    event.preventDefault();

    const texto = textoPost.value;

    // API DOS GATOS
    const resposta = await fetch(
        "https://api.thecatapi.com/v1/images/search"
    );

    const dados = await resposta.json();

    const imagemGato = dados[0].url;

    // OBJETO POST
    const novoPost = {
        data: new Date(),
        usuario: "Edinilsa",
        avatar: "https://i.pravatar.cc/100",
        texto: texto,
        imagem: imagemGato,
        likes: 0
    };

    // ADICIONA NO INÍCIO
    posts.unshift(novoPost);

    // MOSTRA NO FEED
    renderizarFeed();

    // LIMPA CAMPO
    textoPost.value = "";
});

/* RENDERIZAÇÃO */
function renderizarFeed() {

    feed.innerHTML = "";

    posts.forEach((post, index) => {

        const card = document.createElement("div");

        card.classList.add("post");

        card.innerHTML = `
            <div class="usuario">

                <img src="${post.avatar}" alt="avatar">

                <h3>${post.usuario}</h3>

            </div>

            <p class="texto-post">
                ${post.texto}
            </p>

            <img
                class="gato"
                src="${post.imagem}"
                alt="gatinho"
            >

            <div class="area-like">

                <button
                    class="btn-like"
                    onclick="curtir(${index})"
                >
                    Curtir ❤️ (${post.likes})
                </button>

            </div>
        `;

        feed.appendChild(card);
    });
}

/* CURTIR */
function curtir(index) {

    posts[index].likes++;

    renderizarFeed();
}