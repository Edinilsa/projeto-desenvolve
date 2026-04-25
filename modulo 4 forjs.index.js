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
        console.log("Livro já existe!");
    } else {
        estoque.push({ titulo, autor, quantidade });
        console.log("Livro adicionado!");
    }
}

function removerLivro(titulo) {
    let index = -1;

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo === titulo) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        estoque.splice(index, 1);
        console.log("Livro removido!");
    } else {
        console.log("Livro não encontrado!");
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
        console.log("Livro não encontrado!");
    }
}

function listarLivros() {
    if (estoque.length === 0) {
        console.log("Estoque vazio!");
    } else {
        for (let i = 0; i < estoque.length; i++) {
            console.log(`${estoque[i].titulo} - ${estoque[i].autor} - ${estoque[i].quantidade}`);
        }
    }
}