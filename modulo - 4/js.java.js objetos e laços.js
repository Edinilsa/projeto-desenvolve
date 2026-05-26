// Array para armazenar os livros
let estoque = [];

// Função para adicionar livro
function adicionarLivro() {

    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let quantidade = Number(document.getElementById("quantidade").value);

    // Verifica se o livro já existe
    let livroExiste = false;

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i].titulo === titulo) {
            livroExiste = true;
            break;
        }
    }

    if (livroExiste) {

        alert("Livro já existe no estoque!");

    } else {

        let livro = {
            titulo: titulo,
            autor: autor,
            quantidade: quantidade
        };

        estoque.push(livro);

        alert("Livro adicionado com sucesso!");
    }

    listarLivros();
}

// Função para remover livro
function removerLivro(titulo) {

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i].titulo === titulo) {

            estoque.splice(i, 1);

            alert("Livro removido!");

            listarLivros();

            return;
        }
    }

    alert("Livro não encontrado!");
}

// Função para atualizar quantidade
function atualizarQuantidade(titulo) {

    let novaQuantidade = prompt("Digite a nova quantidade:");

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i].titulo === titulo) {

            estoque[i].quantidade = Number(novaQuantidade);

            alert("Quantidade atualizada!");

            listarLivros();

            return;
        }
    }

    alert("Livro não encontrado!");
}

// Função para listar livros
function listarLivros() {

    let lista = document.getElementById("listaLivros");

    lista.innerHTML = "";

    for (let i = 0; i < estoque.length; i++) {

        lista.innerHTML += `
            <div class="livro">
                <p><strong>Título:</strong> ${estoque[i].titulo}</p>

                <p><strong>Autor:</strong> ${estoque[i].autor}</p>

                <p><strong>Quantidade:</strong> ${estoque[i].quantidade}</p>

                <button onclick="removerLivro('${estoque[i].titulo}')">
                    Remover
                </button>

                <button onclick="atualizarQuantidade('${estoque[i].titulo}')">
                    Atualizar Quantidade
                </button>
            </div>
        `;
    }
}