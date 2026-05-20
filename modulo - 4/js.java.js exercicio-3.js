// 1. Array de objetos para armazenar o estoque
let estoque = [];

// 2. Função para adicionar um novo livro
const adicionarLivro = (titulo, autor, quantidade) => {
    // 3. Verifica se o livro já existe no estoque
    const livroExiste = estoque.find(livro => livro.titulo === titulo);

    if (livroExiste) {
        console.log(`Erro: O livro "${titulo}" já está no estoque.`);
    } else {
        estoque.push({ titulo, autor, quantidade });
        console.log(`Sucesso: "${titulo}" adicionado ao estoque.`);
    }
};

// 3. Função para remover um livro pelo título
const removerLivro = (titulo) => {
    const indice = estoque.findIndex(livro => livro.titulo === titulo);

    if (indice !== -1) {
        estoque.splice(indice, 1);
        console.log(`Sucesso: "${titulo}" foi removido do estoque.`);
    } else {
        console.log(`Erro: Livro "${titulo}" não encontrado para remoção.`);
    }
};

// 4. Função para atualizar a quantidade
const atualizarQuantidade = (titulo, novaQuantidade) => {
    const livro = estoque.find(livro => livro.titulo === titulo);

    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Sucesso: Quantidade de "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Erro: Livro "${titulo}" não encontrado.`);
    }
};

// 5. Função para listar todos os livros
const listarLivros = () => {
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        console.log("--- Estoque Atual ---");
        // 4. Laço de repetição para iterar sobre o array
        estoque.forEach((livro, index) => {
            console.log(`${index + 1}. Título: ${livro.titulo} | Autor: ${livro.autor} | Qtd: ${livro.quantidade}`);
        });
    }
};

// --- Testando o Sistema ---
adicionarLivro("O Hobbit", "J.R.R. Tolkien", 10);
adicionarLivro("1984", "George Orwell", 5);
atualizarQuantidade("O Hobbit", 15);
listarLivros();
removerLivro("1984");
listarLivros();