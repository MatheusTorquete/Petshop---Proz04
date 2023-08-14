const tituloContato = document.querySelector("section h1");

tituloContato.addEventListener("mouseover", function () {
    tituloContato.style.color = "black";
});

tituloContato.addEventListener("mouseout", function () {
    tituloContato.style.color = ""; // Retorna à cor original (definida no CSS)
});




const imgContato = document.getElementById("img-contato");

imgContato.addEventListener("mouseover", function () {
    imgContato.style.transform = "scale(1.1)";
});

imgContato.addEventListener("mouseout", function () {
    imgContato.style.transform = "scale(1)";
});



// validação dos dados e guardando no banco
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (validateName(username) && validateEmail(email) && validateMessage(mensagem)) {
            errorMessage.style.display = "none"; // Esconde a mensagem de erro
            successMessage.style.display = "block"; // Mostra a mensagem de sucesso

            // Salva os dados no LocalStorage
            saveData(username, email, mensagem);
        } else {
            errorMessage.style.display = "block"; // Mostra a mensagem de erro
            successMessage.style.display = "none"; // Esconde a mensagem de sucesso
        }
    });

    function validateName(name) {
        // Validação de nome (mais que 2 letras e não vazio)
        return name.trim().length > 2;
    }

    function validateEmail(email) {
        // Validação de email (deve conter @)
        return email.includes("@");
    }

    function validateMessage(message) {
        // Validação de mensagem (não vazia)
        return message.trim() !== "" && message !== "Digite aqui sua mensagem.";
    }

    function saveData(username, email, mensagem) {
        const data = {
            username: username,
            email: email,
            mensagem: mensagem
        };

        // Salva os dados no LocalStorage
        localStorage.setItem("contactData", JSON.stringify(data));
    }
});
