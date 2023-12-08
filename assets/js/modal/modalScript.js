const openModalProd = [];
const closeModalButton = [];
const modal = [];
const fade = [];

for (let i = 1; i <= 12; i++) {
  openModalProd[i] = document.querySelectorAll(`.open-modal-prod${i}`);
  closeModalButton[i] = document.querySelector(`#close-modal-prod${i}`);
  modal[i] = document.querySelector(`#modal-prod${i}`);
  fade[i] = document.querySelector(`#fade-prod${i}`);

  const toggleModal = () => {
    modal[i].classList.toggle("hide");
    fade[i].classList.toggle("hide");
  };

  [closeModalButton[i], fade[i]].forEach((el) => {
    el.addEventListener("click", toggleModal);
  });

  openModalProd[i].forEach((el) => {
    el.addEventListener("click", toggleModal);
  });
}
