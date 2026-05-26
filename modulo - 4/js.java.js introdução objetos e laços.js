// script.js

// Array para armazenar os livros
let estoque = [];

// Função para adicionar livro
function adicionarLivro(titulo, autor, quantidade) {

    // Verifica se o livro já existe
    let existe = false;

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i].titulo === titulo) {
            existe = true;
        }
    }

    if (existe) {

        console.log("Livro já existe no estoque.");

    } else {

        // Cria objeto do livro
        let livro = {
            titulo: titulo,
            autor: autor,
            quantidade: quantidade
        };

        // Adiciona no array
        estoque.push(livro);

        console.log("Livro adicionado com sucesso.");
    }
}

// Função para remover livro
function removerLivro(titulo) {

    let encontrado = false;

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i].titulo === titulo) {

            estoque.splice(i, 1);

            encontrado = true;

            console.log("Livro removido com sucesso.");
        }
    }

    if (!encontrado) {
        console.log("Livro não encontrado.");
    }
}

// Função para atualizar quantidade
function atualizarQuantidade(titulo, novaQuantidade) {

    let encontrado = false;

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i].titulo === titulo) {

            estoque[i].quantidade = novaQuantidade;

            encontrado = true;

            console.log("Quantidade atualizada.");
        }
    }

    if (!encontrado) {
        console.log("Livro não encontrado.");
    }
}

// Função para listar livros
function listarLivros() {

    if (estoque.length === 0) {

        console.log("Estoque vazio.");

    } else {

        console.log("Lista de livros:");

        for (let i = 0; i < estoque.length; i++) {

            console.log(
                "Título: " + estoque[i].titulo +
                " | Autor: " + estoque[i].autor +
                " | Quantidade: " + estoque[i].quantidade
            );
        }
    }
}

// Testes do sistema

adicionarLivro("Dom Casmurro", "Machado de Assis", 10);

adicionarLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 5);

listarLivros();

atualizarQuantidade("Dom Casmurro", 15);

removerLivro("O Pequeno Príncipe");

listarLivros();