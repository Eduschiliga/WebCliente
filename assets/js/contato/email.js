/* Email JS */
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // service ID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_6doum2c",
      "template_0742sio",
      "#contact-form",
      "W5S8C1c1IluY7CmmR"
    )
    .then(
      () => {
        // mostrar mensagem enviada
        contactMessage.textContent = "Mensagem enviada com sucesso ✅";
        // remover mensagem
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // limpar campos
        contactForm.reset();
      },
      () => {
        // mostrar mensagem de erro
        contactMessage.textContent = "Erro ao enviar mensagem ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
