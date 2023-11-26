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

const closeModalButton1 = document.querySelector("#close-modal-prod1");
const modal1 = document.querySelector("#modal-prod1");
const fade1 = document.querySelector("#fade-prod1");

const closeModalButton2 = document.querySelector("#close-modal-prod2");
const modal2 = document.querySelector("#modal-prod2");
const fade2 = document.querySelector("#fade-prod2");

const closeModalButton3 = document.querySelector("#close-modal-prod3");
const modal3 = document.querySelector("#modal-prod3");
const fade3 = document.querySelector("#fade-prod3");

const closeModalButton4 = document.querySelector("#close-modal-prod4");
const modal4 = document.querySelector("#modal-prod4");
const fade4 = document.querySelector("#fade-prod4");

const closeModalButton5 = document.querySelector("#close-modal-prod5");
const modal5 = document.querySelector("#modal-prod5");
const fade5 = document.querySelector("#fade-prod5");

const closeModalButton6 = document.querySelector("#close-modal-prod6");
const modal6 = document.querySelector("#modal-prod6");
const fade6 = document.querySelector("#fade-prod6");

const closeModalButton7 = document.querySelector("#close-modal-prod7");
const modal7 = document.querySelector("#modal-prod7");
const fade7 = document.querySelector("#fade-prod7");

const closeModalButton8 = document.querySelector("#close-modal-prod8");
const modal8 = document.querySelector("#modal-prod8");
const fade8 = document.querySelector("#fade-prod8");

const closeModalButton9 = document.querySelector("#close-modal-prod9");
const modal9 = document.querySelector("#modal-prod9");
const fade9 = document.querySelector("#fade-prod9");

const closeModalButton10 = document.querySelector("#close-modal-prod10");
const modal10 = document.querySelector("#modal-prod10");
const fade10 = document.querySelector("#fade-prod10");

const closeModalButton11 = document.querySelector("#close-modal-prod11");
const modal11 = document.querySelector("#modal-prod11");
const fade11 = document.querySelector("#fade-prod11");

const closeModalButton12 = document.querySelector("#close-modal-prod12");
const modal12 = document.querySelector("#modal-prod12");
const fade12 = document.querySelector("#fade-prod12");

const toggleModal1 = () => {
  modal1.classList.toggle("hide");
  fade1.classList.toggle("hide");
};

const toggleModal2 = () => {
  modal2.classList.toggle("hide");
  fade2.classList.toggle("hide");
};

const toggleModal3 = () => {
  modal3.classList.toggle("hide");
  fade3.classList.toggle("hide");
};

const toggleModal4 = () => {
  modal4.classList.toggle("hide");
  fade4.classList.toggle("hide");
};

const toggleModal5 = () => {
  modal5.classList.toggle("hide");
  fade5.classList.toggle("hide");
};

const toggleModal6 = () => {
  modal6.classList.toggle("hide");
  fade6.classList.toggle("hide");
};

const toggleModal7 = () => {
  modal7.classList.toggle("hide");
  fade7.classList.toggle("hide");
};

const toggleModal8 = () => {
  modal8.classList.toggle("hide");
  fade8.classList.toggle("hide");
};

const toggleModal9 = () => {
  modal9.classList.toggle("hide");
  fade9.classList.toggle("hide");
};

const toggleModal10 = () => {
  modal10.classList.toggle("hide");
  fade10.classList.toggle("hide");
};

const toggleModal11 = () => {
  modal11.classList.toggle("hide");
  fade11.classList.toggle("hide");
};

const toggleModal12 = () => {
  modal12.classList.toggle("hide");
  fade12.classList.toggle("hide");
};

[closeModalButton1, fade1].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal1();
  });
});

[closeModalButton2, fade2].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal2();
  });
});

[closeModalButton3, fade3].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal3();
  });
});

[closeModalButton4, fade4].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal4();
  });
});

[closeModalButton5, fade5].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal5();
  });
});

[closeModalButton6, fade6].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal6();
  });
});

[closeModalButton7, fade7].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal7();
  });
});

[closeModalButton8, fade8].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal8();
  });
});

[closeModalButton9, fade9].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal9();
  });
});

[closeModalButton10, fade10].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal10();
  });
});

[closeModalButton11, fade11].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal11();
  });
});

[closeModalButton12, fade12].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal12();
  });
});

openModalProd1.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal1();
  });
});

openModalProd2.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal2();
  });
});

openModalProd3.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal3();
  });
});

openModalProd4.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal4();
  });
});

openModalProd5.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal5();
  });
});

openModalProd6.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal6();
  });
});

openModalProd7.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal7();
  });
});

openModalProd8.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal8();
  });
});

openModalProd9.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal9();
  });
});

openModalProd10.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal10();
  });
});

openModalProd11.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal11();
  });
});

openModalProd12.forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal12();
  });
});
