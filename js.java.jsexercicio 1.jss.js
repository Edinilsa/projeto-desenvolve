function exibirMensagem() {
     let nome = document.getElementById("Edinilsa").value;

       let titulo = document.getElementById("A faculdade dos sonhos");

    if (Edinilsa === "") {
        titulo.textContent = " Edinilsa.";
    } else {
        titulo.textContent = "Olá, " + Edinilsa+ "! Seja bem-vinda!";
    }
}