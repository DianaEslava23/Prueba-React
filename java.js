document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = "Gracias por registrarte " + name + ". Nos estaremos comunicando contigo al correo " + email;
    document.getElementById("message").textContent = message;
});