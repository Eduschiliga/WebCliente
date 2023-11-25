(function () {
  const carrossel = document.querySelectorAll(".carrossel");
  const btnPrev = document.getElementById("prev-button");
  const btnNext = document.getElementById("next-button");

  let currentCarrossel = 0;

  function esconderCarrossel() {
    carrossel.forEach((item) => item.classList.remove("on"));
  }

  function mostarCarrossel() {
    carrossel[currentCarrossel].classList.add("on");
  }

  function avancarCarrossel() {
    esconderCarrossel();
    if (currentCarrossel == carrossel.length - 1) {
      currentCarrossel = 0;
    } else {
      currentCarrossel++;
    }
    mostarCarrossel();
  }

  function voltarCarrossel() {
    esconderCarrossel();
    if (currentCarrossel == 0) {
      currentCarrossel = carrossel.length - 1;
    } else {
      currentCarrossel--;
    }
    mostarCarrossel();
  }

  btnNext.addEventListener("click", () => {
    avancarCarrossel();
  });

  btnPrev.addEventListener("click", () => {
    voltarCarrossel();
  });
})();
