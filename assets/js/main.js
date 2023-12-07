const NOME_USER = document.querySelector("#nomeUser");
const BTN_CADASTRAR = document.querySelector("#cadastrarUser");
const USUARIO = JSON.parse(localStorage.getItem("cadastro"));

if (USUARIO) {
  BTN_CADASTRAR.setAttribute("style", "display:none");

  NOME_USER.innerHTML = `${USUARIO.nome}`;
  NOME_USER.setAttribute("style", "display: block");
}

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Quando a rolagem é maior que 200 na altura da janela de visualização, adicione a classe show-scroll à tag de rolagem
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
