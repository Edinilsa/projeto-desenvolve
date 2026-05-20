// 1. Definição do array de objetos para armazenar o estoque
let estoque = [];

// 2. Funções para gerenciar o estoque

// Adiciona um novo livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
    // 3. Verifica se o livro já existe no estoque
    const livroExistente = estoque.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());

    if (livroExistente) {
        console.log(`Erro: O livro "${titulo}" já existe no estoque. Use atualizarQuantidade().`);
    } else {
        estoque.push({ titulo, autor, quantidade });
        console.log(`Sucesso: Livro "${titulo}" adicionado.`);
    }
}

// Remove um livro do estoque pelo título
function removerLivro(titulo) {
    const indice = estoque.findIndex(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());

    if (indice !== -1) {
        estoque.splice(indice, 1); // Remove o elemento pelo índice
        console.log(`Sucesso: Livro "${titulo}" removido do estoque.`);
    } else {
        console.log(`Erro: Livro "${titulo}" não encontrado.`);
    }
}

// Atualiza a quantidade de um livro existente
function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = estoque.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());

    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Sucesso: Quantidade de "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Erro: Livro "${titulo}" não encontrado para atualização.`);
    }
}

// 4. Lista todos os livros usando laço de repetição
function listarLivros() {
    console.log("\n--- ESTOQUE ATUAL ---");
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        estoque.forEach((livro, index) => {
            console.log(`${index + 1}. Título: ${livro.titulo} | Autor: ${livro.autor} | Qtd: ${livro.quantidade}`);
        });
    }
    console.log("----------------------\n");
}

// --- TESTANDO O SISTEMA ---

adicionarLivro("O Hobbit", "J.R.R. Tolkien", 10);
adicionarLivro("1984", "George Orwell", 5);
adicionarLivro("O Hobbit", "J.R.R. Tolkien", 2); // Deve dar erro (já existe)

listarLivros();

atualizarQuantidade("1984", 12);
removerLivro("O Hobbit");

listarLivros();