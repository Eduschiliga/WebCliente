const PRODUTOS = [
  {element: document.querySelector("#produto1"), categoria: "frutas"},
  {element: document.querySelector("#produto2"), categoria: "eletronicos"},
  {element: document.querySelector("#produto3"), categoria: "frutas"},
  {element: document.querySelector("#produto4"), categoria: "frutas"},
  {element: document.querySelector("#produto5"), categoria: "bebidas"},
  {element: document.querySelector("#produto6"), categoria: "doces"},
  {element: document.querySelector("#produto7"), categoria: "frutas"},
  {element: document.querySelector("#produto8"), categoria: "eletronicos"},
  {element: document.querySelector("#produto9"), categoria: "eletronicos"},
  {element: document.querySelector("#produto10"), categoria: "eletronicos"},
  {element: document.querySelector("#produto11"), categoria: "eletronicos"},
  {element: document.querySelector("#produto12"), categoria: "eletronicos"},
];

const CONTAINER_PRODUTOS = document.querySelector("#containerProdutos");
const MENSAGEM_ERRO = document.querySelector("#mensagemErro");
const SELECT_PRECO = document.querySelector("#preco");
const SELECT_ORDEM_ALFA = document.querySelector("#ordemAlfa");
const SELECT_CATEGORIA = document.querySelector("#categoria");

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('searchInput');
  const productCards = document.querySelectorAll('.card');

  searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.toLowerCase();
    let hasVisibleProducts = false;

    productCards.forEach(card => {
      const productName = card.querySelector('h3').innerText.toLowerCase();
      if (productName.includes(searchValue)) {
        card.style.display = 'block';
        hasVisibleProducts = true;
      } else {
        card.style.display = 'none';
      }
    });

    if (hasVisibleProducts) {
      MENSAGEM_ERRO.style.display = 'none';
    } else {
      MENSAGEM_ERRO.style.display = 'block';
    }
  });

  // Inicializando eventos de filtro
  SELECT_PRECO.addEventListener("change", ordenarProdutos);
  SELECT_ORDEM_ALFA.addEventListener("change", ordenarProdutos);
  SELECT_CATEGORIA.addEventListener("change", ordenarProdutos);

  // Mostrar todos os produtos no carregamento inicial
  exibirTodosProdutos();
});

function exibirTodosProdutos() {
  PRODUTOS.forEach(produto => {
    produto.element.style.display = 'block';
  });
}

function ordenarProdutos() {
  let produtosArray = PRODUTOS;

  // Aplicar filtragem por categoria
  if (SELECT_CATEGORIA.value) {
    produtosArray = produtosArray.filter(produto => produto.categoria === SELECT_CATEGORIA.value);
  }

  // Aplicar ordenação alfabética primeiro
  if (SELECT_ORDEM_ALFA.value) {
    produtosArray.sort((a, b) => {
      const nomeA = a.element.querySelector("h3").textContent.toLowerCase();
      const nomeB = b.element.querySelector("h3").textContent.toLowerCase();

      if (SELECT_ORDEM_ALFA.value === "AZ") {
        return nomeA.localeCompare(nomeB);
      } else if (SELECT_ORDEM_ALFA.value === "ZA") {
        return nomeB.localeCompare(nomeA);
      }

      return 0;
    });
  }

  // Aplicar ordenação por preço
  if (SELECT_PRECO.value) {
    produtosArray.sort((a, b) => {
      const precoA = parseFloat(a.element.querySelector("#precoInteiro").textContent + "." + a.element.querySelector("#precoDecimal").textContent);
      const precoB = parseFloat(b.element.querySelector("#precoInteiro").textContent + "." + b.element.querySelector("#precoDecimal").textContent);

      if (SELECT_PRECO.value === "maior") {
        return precoB - precoA;
      } else if (SELECT_PRECO.value === "menor") {
        return precoA - precoB;
      }

      return 0;
    });
  }

  // Limpar o contêiner
  CONTAINER_PRODUTOS.innerHTML = "";

  // Adicionar produtos ordenados e filtrados ao contêiner
  produtosArray.forEach((produto) => {
    CONTAINER_PRODUTOS.appendChild(produto.element);
    produto.element.style.display = 'block';  // Certifique-se de que os produtos filtrados sejam exibidos
  });

  // Verificar se há produtos visíveis
  const hasVisibleProducts = produtosArray.length > 0;

  if (hasVisibleProducts) {
    MENSAGEM_ERRO.style.display = 'none';
  } else {
    MENSAGEM_ERRO.style.display = 'block';
  }
}
