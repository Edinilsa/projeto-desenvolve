// 1. Definição do array de objetos para armazenar o estoque
let estoque = [];

// 2. Funções de gerenciamento

// Adiciona um novo livro ou avisa se já existir
function adicionarLivro(titulo, autor, quantidade) {
    let livroExistente = false;

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            livroExistente = true;
            break;
        }
    }

    if (livroExistente) {
        console.log(`Erro: O livro "${titulo}" já está no estoque.`);
    } else {
        estoque.push({ titulo, autor, quantidade });
        console.log(`Sucesso: "${titulo}" adicionado com ${quantidade} unidades.`);
    }
}

// Remove um livro do estoque pelo título
function removerLivro(titulo) {
    let indiceEncontrado = -1;

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            indiceEncontrado = i;
            break;
        }
    }

    if (indiceEncontrado !== -1) {
        estoque.splice(indiceEncontrado, 1);
        console.log(`Sucesso: "${titulo}" foi removido do sistema.`);
    } else {
        console.log(`Erro: Livro "${titulo}" não encontrado.`);
    }
}

// Atualiza a quantidade de um livro existente
function atualizarQuantidade(titulo, novaQuantidade) {
    let atualizado = false;

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            estoque[i].quantidade = novaQuantidade;
            atualizado = true;
            console.log(`Quantidade de "${titulo}" atualizada para ${novaQuantidade}.`);
            break;
        }
    }

    if (!atualizado) {
        console.log(`Erro: Não foi possível atualizar. "${titulo}" não encontrado.`);
    }
}

// Lista todos os livros de forma organizada
function listarLivros() {
    console.log("\n--- LISTA DE ESTOQUE ATUAL ---");
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        estoque.forEach((livro, index) => {
            console.log(`${index + 1}. Título: ${livro.titulo} | Autor: ${livro.autor} | Qtd: ${livro.quantidade}`);
        });
    }
    console.log("------------------------------\n");
}

// --- TESTANDO O SISTEMA ---

adicionarLivro("Dom Casmurro", "Machado de Assis", 10);
adicionarLivro("O Hobbit", "J.R.R. Tolkien", 5);
adicionarLivro("Dom Casmurro", "Machado de Assis", 2); // Deve dar erro (duplicado)

listarLivros();

atualizarQuantidade("O Hobbit", 12);
removerLivro("Dom Casmurro");

listarLivros();