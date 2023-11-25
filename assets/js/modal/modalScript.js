const openModalProd1 = document.querySelectorAll(".open-modal-prod1");
const openModalProd2 = document.querySelectorAll(".open-modal-prod2");
const openModalProd3 = document.querySelectorAll(".open-modal-prod3");
const openModalProd4 = document.querySelectorAll(".open-modal-prod4");
const openModalProd5 = document.querySelectorAll(".open-modal-prod5");
const openModalProd6 = document.querySelectorAll(".open-modal-prod6");
const openModalProd7 = document.querySelectorAll(".open-modal-prod7");
const openModalProd8 = document.querySelectorAll(".open-modal-prod8");
const openModalProd9 = document.querySelectorAll(".open-modal-prod9");
const openModalProd10 = document.querySelectorAll(".open-modal-prod10");
const openModalProd11 = document.querySelectorAll(".open-modal-prod11");
const openModalProd12 = document.querySelectorAll(".open-modal-prod12");

const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd1.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd2.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd3.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd4.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd5.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd6.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd7.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd8.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd9.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd10.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd11.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});

openModalProd12.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});
