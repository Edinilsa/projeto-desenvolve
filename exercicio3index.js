let estoque = [];

function adicionarLivro(titulo, autor, quantidade) {
    let existe = false;

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo === titulo) {
            existe = true;
            break;
        }
    }

    if (existe) {
        console.log("Livro já existe no estoque.");
    } else {
        estoque.push({ titulo, autor, quantidade });
        console.log("Livro adicionado com sucesso!");
    }
}

function removerLivro(titulo) {
    let encontrado = false;

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo === titulo) {
            estoque.splice(i, 1);
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        console.log("Livro removido com sucesso!");
    } else {
        console.log("Livro não encontrado.");
    }
}

function atualizarQuantidade(titulo, novaQuantidade) {
    let encontrado = false;

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo === titulo) {
            estoque[i].quantidade = novaQuantidade;
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        console.log("Quantidade atualizada!");
    } else {
        console.log("Livro não encontrado.");
    }
}

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

// Teste
adicionarLivro("Dom Casmurro", "Machado de Assis", 10);
adicionarLivro("1984", "George Orwell", 5);
listarLivros();

atualizarQuantidade("1984", 8);
listarLivros();

removerLivro("Dom Casmurro");
listarLivros();