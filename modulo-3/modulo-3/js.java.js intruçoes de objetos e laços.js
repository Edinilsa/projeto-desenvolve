// =================================================================
// 1 - Definição do estoque (Array de Objetos)
// =================================================================
const estoque = [];

// =================================================================
// 2, 3 e 4 - Funções de Gerenciamento, Condicionais e Laços
// =================================================================

// Função para adicionar um novo livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
    let livroExiste = false;

    // Laço para verificar se o livro já existe no estoque
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            livroExiste = true;
            break; // Para o laço se encontrar o livro
        }
    }

    // Condicional para validar a existência
    if (livroExiste) {
        console.log(`⚠️ Erro: O livro "${titulo}" já existe no estoque.`);
    } else {
        const novoLivro = {
            titulo: titulo,
            autor: autor,
            quantidade: quantidade
        };
        estoque.push(novoLivro);
        console.log(`✅ Sucesso: "${titulo}" adicionado ao estoque.`);
    }
}

// Função para remover um livro do estoque pelo título
function removerLivro(titulo) {
    let indiceEncontrado = -1;

    // Laço para buscar a posição do livro
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            indiceEncontrado = i;
            break;
        }
    }

    // Condicional para verificar se o livro foi encontrado antes de remover
    if (indiceEncontrado !== -1) {
        estoque.splice(indiceEncontrado, 1);
        console.log(`❌ Sucesso: O livro "${titulo}" foi removido.`);
    } else {
        console.log(`⚠️ Erro: Livro "${titulo}" não encontrado para remoção.`);
    }
}

// Função para atualizar a quantidade de um livro no estoque
function atualizarQuantidade(titulo, novaQuantidade) {
    let atualizado = false;

    // Laço para buscar o livro e atualizar
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            estoque[i].quantidade = novaQuantidade;
            atualizado = true;
            break;
        }
    }

    // Condicional para o caso do livro não existir
    if (atualizado) {
        console.log(`🔄 Sucesso: Quantidade de "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`⚠️ Erro: Livro "${titulo}" não encontrado para atualização.`);
    }
}

// Função para listar todos os livros usando laço de repetição
function listarLivros() {
    console.log("\n--- 📚 ESTOQUE ATUAL DA LIVRARIA ---");

    // Condicional para verificar se o estoque está vazio
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
        console.log("------------------------------------\n");
        return;
    }

    // Laço de repetição clássico para iterar sobre o array de livros
    for (let i = 0; i < estoque.length; i++) {
        let livro = estoque[i];
        console.log(`${i + 1}. Título: ${livro.titulo} | Autor: ${livro.autor} | Qtd: ${livro.quantidade}`);
    }
    console.log("------------------------------------\n");
}

// =================================================================
// 🧪 ÁREA DE TESTES (Exemplo de funcionamento do sistema)
// =================================================================

adicionarLivro("O Hobbit", "J.R.R. Tolkien", 10);
adicionarLivro("Dom Casmurro", "Machado de Assis", 5);
adicionarLivro("1984", "George Orwell", 8);

// Tentando adicionar livro repetido (Cai na condicional de erro)
adicionarLivro("O Hobbit", "J.R.R. Tolkien", 2); 

// Mostra a lista com os 3 livros adicionados
listarLivros();

// Atualiza a quantidade do livro 1984
atualizarQuantidade("1984", 15);

// Remove o livro Dom Casmurro
removerLivro("Dom Casmurro");

// Mostra a lista final (Deve conter apenas O Hobbit e 1984 modificado)
listarLivros();