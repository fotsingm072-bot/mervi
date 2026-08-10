const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const numeroWhatsApp = "237697116104";

    const texte =
        "Bonjour Merveille 👋\n\n" +
        "Nouveau message depuis ton portfolio.\n\n" +
        "Nom : " + nom + "\n" +
        "Email : " + email + "\n\n" +
        "Message :\n" + message;

    const whatsappURL =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(texte);

    window.open(whatsappURL, "_blank");
});