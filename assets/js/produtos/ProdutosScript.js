const nomes = document.querySelectorAll(".card h3");
const precoInteiroProdutos = document.querySelectorAll(".card #precoInteiro");
const precoDecimalProdutos = document.querySelectorAll(".card #precoDecimal");
const btnComprarCard = document.querySelectorAll(".card #btnComprar");
const btnComprarModal = document.querySelectorAll(".modal-body #btnComprar");
const imgsCard = document.querySelectorAll(".card img");

console.log(imgsCard);

let precos = [];

for (let i = 0; i < precoInteiroProdutos.length; i++) {
  let precoInteiro = Number(precoInteiroProdutos[i].textContent);
  let precoDecimal = Number(precoDecimalProdutos[i].textContent) / 100;

  let precoCompleto = precoInteiro + precoDecimal;

  precos.push(precoCompleto);
}

let pedidos = JSON.parse(localStorage.getItem("pedidos"));

if (!pedidos) {
  pedidos = {
    item: new Array(nomes.length).fill(""),
    quantidade: new Array(nomes.length).fill(0),
    preco: new Array(nomes.length).fill(0),
    imagemSrc: new Array(imgsCard.length).fill(""),
  };
}

for (let i = 0; i < btnComprarCard.length; i++) {
  btnComprarCard[i].addEventListener("click", () => {
    pedidos.item[i] = nomes[i].textContent;
    pedidos.quantidade[i]++;
    pedidos.preco[i] = precos[i];
    pedidos.imagemSrc[i] = imgsCard[i].getAttribute("src");
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  });

  btnComprarModal[i].addEventListener("click", () => {
    pedidos.item[i] = nomes[i].textContent;
    pedidos.quantidade[i]++;
    pedidos.preco[i] = precos[i];
    pedidos.imagemSrc[i] = imgsCard[i].getAttribute("src");
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  });
}
