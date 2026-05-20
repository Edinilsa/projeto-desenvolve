<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas - Exercício</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>Minhas Tarefas</h1>
        
        <div class="input-area">
            <input type="text" id="campoTexto" placeholder="Digite uma nova tarefa...">
            <button onclick="adicionarTarefa()">Adicionar</button>
        </div>

        <div id="listaContainer">
            <!-- As tarefas aparecerão aqui dinamicamente -->
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>