// Array de livros
let estoque = [];

// Elementos
const tituloInput = document.getElementById("titulo");
const autorInput = document.getElementById("autor");
const quantidadeInput = document.getElementById("quantidade");

const botaoAdicionar = document.getElementById("adicionar");

const listaLivros = document.getElementById("listaLivros");

// Função adicionar livro
function adicionarLivro(titulo, autor, quantidade) {

    // Verifica se livro já existe
    let livroExiste = false;

    for (let livro of estoque) {

        if (livro.titulo === titulo) {

            livroExiste = true;
        }
    }

    if (livroExiste) {

        alert("Livro já existe no estoque!");

    } else {

        const novoLivro = {
            titulo: titulo,
            autor: autor,
            quantidade: quantidade
        };

        estoque.push(novoLivro);

        listarLivros();
    }
}

// Função remover livro
function removerLivro(titulo) {

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i].titulo === titulo) {

            estoque.splice(i, 1);

            listarLivros();

            return;
        }
    }

    alert("Livro não encontrado!");
}

// Função atualizar quantidade
function atualizarQuantidade(titulo, novaQuantidade) {

    for (let livro of estoque) {

        if (livro.titulo === titulo) {

            livro.quantidade = novaQuantidade;

            listarLivros();

            return;
        }
    }

    alert("Livro não encontrado!");
}

// Função listar livros
function listarLivros() {

    listaLivros.innerHTML = "";

    for (let livro of estoque) {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>Título:</strong> ${livro.titulo} <br>
            <strong>Autor:</strong> ${livro.autor} <br>
            <strong>Quantidade:</strong> ${livro.quantidade} <br><br>
        `;

        // Botão atualizar
        const botaoAtualizar = document.createElement("button");

        botaoAtualizar.textContent = "Atualizar Quantidade";

        botaoAtualizar.classList.add("atualizar");

        botaoAtualizar.addEventListener("click", () => {

            let novaQuantidade = prompt(
                "Digite a nova quantidade:"
            );

            atualizarQuantidade(
                livro.titulo,
                Number(novaQuantidade)
            );
        });

        // Botão remover
        const botaoRemover = document.createElement("button");

        botaoRemover.textContent = "Remover";

        botaoRemover.classList.add("remover");

        botaoRemover.addEventListener("click", () => {

            removerLivro(livro.titulo);
        });

        li.appendChild(botaoAtualizar);

        li.appendChild(document.createTextNode(" "));

        li.appendChild(botaoRemover);

        listaLivros.appendChild(li);
    }
}

// Evento adicionar
botaoAdicionar.addEventListener("click", () => {

    const titulo = tituloInput.value.trim();

    const autor = autorInput.value.trim();

    const quantidade = Number(
        quantidadeInput.value
    );

    if (
        titulo !== "" &&
        autor !== "" &&
        quantidade > 0
    ) {

        adicionarLivro(
            titulo,
            autor,
            quantidade
        );

        tituloInput.value = "";
        autorInput.value = "";
        quantidadeInput.value = "";

    } else {

        alert("Preencha todos os campos!");
    }
});