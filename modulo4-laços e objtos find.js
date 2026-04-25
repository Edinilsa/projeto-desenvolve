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