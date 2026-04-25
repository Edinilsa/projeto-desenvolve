// Array de livros
let estoque = [];

// Adicionar livro
function adicionarLivro(titulo, autor, quantidade) {
    const existe = estoque.find(livro => livro.titulo === titulo);

    if (existe) {
        console.log("Livro já existe!");
        return;
    }

    estoque.push({
        titulo: titulo,
        autor: autor,
        quantidade: quantidade
    });

    console.log("Livro adicionado!");
}

// Remover livro
function removerLivro(titulo) {
    const index = estoque.findIndex(livro => livro.titulo === titulo);

    if (index === -1) {
        console.log("Livro não encontrado!");
        return;
    }

    estoque.splice(index, 1);
    console.log("Livro removido!");
}

// Atualizar quantidade
function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = estoque.find(livro => livro.titulo === titulo);

    if (!livro) {
        console.log("Livro não encontrado!");
        return;
    }

    livro.quantidade = novaQuantidade;
    console.log("Quantidade atualizada!");
}

// Listar livros
function listarLivros() {
    if (estoque.length === 0) {
        console.log("Estoque vazio.");
        return;
    }

    for (let i = 0; i < estoque.length; i++) {
        const livro = estoque[i];
        console.log(
            `Título: ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`
        );
    }
}