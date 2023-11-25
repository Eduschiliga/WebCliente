const PRODUTOS = document.querySelectorAll(".card");
const CONTAINER_PRODUTOS = document.querySelector("#containerProdutos");
const SELECT_PRECO = document.querySelector("#preco");
const SELECT_ORDEM_ALFA = document.querySelector("#ordemAlfa");

function ordenarProdutos() {
  let produtosArray = Array.from(PRODUTOS);

  produtosArray.sort((a, b) => {
    if (SELECT_PRECO.value === "maior") {
      const precoA = parseFloat(a.querySelector("#precoInteiro").textContent);
      const precoB = parseFloat(b.querySelector("#precoInteiro").textContent);
      if (precoA !== precoB) {
        return precoB - precoA;
      }
    } else if (SELECT_PRECO.value === "menor") {
      const precoA = parseFloat(a.querySelector("#precoInteiro").textContent);
      const precoB = parseFloat(b.querySelector("#precoInteiro").textContent);
      if (precoA !== precoB) {
        return precoA - precoB;
      }
    }

    if (SELECT_ORDEM_ALFA.value === "AC") {
      const nomeA = a.querySelector("h3").textContent.toLowerCase();
      const nomeB = b.querySelector("h3").textContent.toLowerCase();
      return nomeA.localeCompare(nomeB);
    } else if (SELECT_ORDEM_ALFA.value === "ZA") {
      const nomeA = a.querySelector("h3").textContent.toLowerCase();
      const nomeB = b.querySelector("h3").textContent.toLowerCase();
      return nomeB.localeCompare(nomeA);
    }

    return 0; // Nenhuma ordenação específica, mantém a ordem original
  });

  // Limpar o contêiner
  CONTAINER_PRODUTOS.innerHTML = "";

  // Adicionar produtos ordenados ao contêiner
  produtosArray.forEach((produto) => {
    CONTAINER_PRODUTOS.appendChild(produto);
  });
}

SELECT_PRECO.addEventListener("change", ordenarProdutos);
SELECT_ORDEM_ALFA.addEventListener("change", ordenarProdutos);
