const NOME_USER = document.querySelector("#nomeUser");
const BTN_CADASTRAR = document.querySelector("#cadastrarUser");
const USUARIO = JSON.parse(localStorage.getItem("cadastro"));

if (USUARIO) {
  BTN_CADASTRAR.setAttribute("style", "display:none");

  NOME_USER.innerHTML = `${USUARIO.nome}`;
  NOME_USER.setAttribute("style", "display: block");
}
