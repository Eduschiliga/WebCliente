const PRODUTOS = document.querySelectorAll(".card");
const CONTAINER_PRODUTOS = document.querySelector("#containerProdutos");
const SELECT_PRECO = document.querySelector("#preco");
const SELECT_ORDEM_ALFA = document.querySelector("#ordemAlfa");

function ordenarPorPreco() {
  let produtosArray = Array.from(PRODUTOS);
  SELECT_ORDEM_ALFA.selectedIndex = 0;
  produtosArray.sort((a, b) => {
    const precoA = parseFloat(a.querySelector("#precoInteiro").textContent);
    const precoB = parseFloat(b.querySelector("#precoInteiro").textContent);

    if (SELECT_PRECO.value === "maior") {
      return precoB - precoA;
    } else if (SELECT_PRECO.value === "menor") {
      return precoA - precoB;
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

function ordenarPorOrdemAlfa() {
  let produtosArray = Array.from(PRODUTOS);
  SELECT_PRECO.selectedIndex = 0;

  produtosArray.sort((a, b) => {
    const nomeA = a.querySelector("h3").textContent.toLowerCase();
    const nomeB = b.querySelector("h3").textContent.toLowerCase();

    if (SELECT_ORDEM_ALFA.value === "AZ") {
      return nomeA.localeCompare(nomeB);
    } else if (SELECT_ORDEM_ALFA.value === "ZA") {
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

SELECT_PRECO.addEventListener("change", ordenarPorPreco);
SELECT_ORDEM_ALFA.addEventListener("change", ordenarPorOrdemAlfa);
