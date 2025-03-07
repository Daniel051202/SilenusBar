document.addEventListener("DOMContentLoaded", function () {
    // Mensaje de bienvenida en consola
    console.log("Bienvenido a SILENUS - Barra de Coctelería");

    // Cambio de color en la navegación al hacer hover
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => link.style.color = "red");
        link.addEventListener("mouseout", () => link.style.color = "#FFD700");
    });

    // Alerta en la página de paquetes
    const paquetesLink = document.querySelector("a[href='paquetes.html']");
    if (paquetesLink) {
        paquetesLink.addEventListener("click", function (event) {
            alert("Explora nuestros paquetes y elige el mejor para ti!");
        });
    }

    // Formulario de contacto - Validación simple
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const nombre = document.getElementById("nombre").value;
            if (nombre.trim() === "") {
                event.preventDefault();
                alert("Por favor, ingresa tu nombre.");
            }
        });
    }
});
