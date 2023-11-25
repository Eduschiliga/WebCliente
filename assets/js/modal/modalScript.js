const openModalImg = document.querySelector("#open-modal-img");
const openModalNome = document.querySelector("#open-modal-nome");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  [modal, fade].forEach((el) => {
    el.classList.toggle("hide");
    fade.classList.toggle("hide");
  });
};

[openModalImg, openModalNome, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});
