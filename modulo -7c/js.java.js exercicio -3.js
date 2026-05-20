const botao = document.getElementById("buscar");
const pesquisa = document.getElementById("pesquisa");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {

    const valor = pesquisa.value;

    lista.innerHTML = "";
    mensagem.textContent = "";

    fetch(`https://api.github.com/search/users?q=${valor}`)

        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (dados) {

            if (dados.items.length === 0) {

                mensagem.textContent =
                    "Não foram encontrados usuários para esta pesquisa";

            } else {

                dados.items.forEach(function (usuario) {

                    const item = document.createElement("li");

                    item.innerHTML = `
                        <img src="${usuario.avatar_url}">

                        <div>
                            <p>${usuario.login}</p>

                            <a href="${usuario.html_url}" target="_blank">
                                Ver Perfil
                            </a>
                        </div>
                    `;

                    lista.appendChild(item);

                });

            }

        })

        .catch(function () {

            mensagem.textContent = "Erro ao buscar usuários.";

        });

});