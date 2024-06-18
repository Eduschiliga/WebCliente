const PRODUTOS = document.querySelectorAll(".card");
const CONTAINER_PRODUTOS = document.querySelector("#containerProdutos");
const SELECT_PRECO = document.querySelector("#preco");
const SELECT_ORDEM_ALFA = document.querySelector("#ordemAlfa");

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();

        productCards.forEach(card => {
            const productName = card.querySelector('h3').innerText.toLowerCase();
            if (productName.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Inicializando eventos de filtro
    SELECT_PRECO.addEventListener("change", ordenarProdutos);
    SELECT_ORDEM_ALFA.addEventListener("change", ordenarProdutos);
});

function ordenarProdutos() {
    let produtosArray = Array.from(PRODUTOS);

    // Aplicar ordenação alfabética primeiro
    if (SELECT_ORDEM_ALFA.value) {
        produtosArray.sort((a, b) => {
            const nomeA = a.querySelector("h3").textContent.toLowerCase();
            const nomeB = b.querySelector("h3").textContent.toLowerCase();

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
            const precoA = parseFloat(a.querySelector("#precoInteiro").textContent + "." + a.querySelector("#precoDecimal").textContent);
            const precoB = parseFloat(b.querySelector("#precoInteiro").textContent + "." + b.querySelector("#precoDecimal").textContent);

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

    // Adicionar produtos ordenados ao contêiner
    produtosArray.forEach((produto) => {
        CONTAINER_PRODUTOS.appendChild(produto);
    });
}
