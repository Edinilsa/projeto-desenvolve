

let estoque = [];

function adicionarLivro(titulo, autor, quantidade) {
    
    let livroExistente = estoque.find(livro => livro.titulo === titulo);
    if (livroExistente) {
        console.log(`O livro "${titulo}" já existe no estoque.`);
    } else {
        estoque.push({ titulo, autor, quantidade });
        console.log(`Livro "${titulo}" adicionado com sucesso!`);
    }
vro}

function removerLivro(titulo) {
    let indice = estoque.findIndex(livro => livro.titulo === titulo);
    if (indice !== -1) {
        estoque.splice(indice, 1);
        console.log(`Livro "${titulo}" removido do estoque.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}

function atualizarQuantidade(titulo, novaQuantidade) {
    let livro = estoque.find(livro => livro.titulo === titulo);
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}

function listarLivros() {
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        console.log("Livros no estoque:");
        for (let livro of estoque) {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        }
    }
}

adicionarLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 5);
adicionarLivro("1984", "George Orwell", 3);
adicionarLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 2);
listarLivros();
atualizarQuantidade("1984", 10);
removerLivro("O Pequeno Príncipe");
listarLivros();
removerLivro("Harry Potter"); 





