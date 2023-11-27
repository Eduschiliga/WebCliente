window.onload = function () {
  const pedidos = JSON.parse(localStorage.getItem("pedidos"));
  const tbody = document.querySelector("tbody");

  for (let i = 0; i < pedidos.item.length; i++) {
    if (pedidos.quantidade[i] > 0) {
      let tr = document.createElement("tr");
      tr.className = "produto";

      // td nome produto
      let tdNome = document.createElement("td");
      tdNome.className = "nome-produto";
      let spanNome = document.createElement("span");
      spanNome.textContent = pedidos.item[i];

      tdNome.appendChild(spanNome);
      tr.appendChild(tdNome);

      let tdImg = document.createElement("td");
      let imgProduto = document.createElement("img");
      imgProduto.src = pedidos.imagemSrc[i];
      imgProduto.width = 100;
      imgProduto.height = 100;
      imgProduto.className = "imgProd";
      tdNome.appendChild(imgProduto);

      // preco
      let tdPreco = document.createElement("td");
      tdPreco.className = "preco-produto";
      let spanPreco = document.createElement("span");
      spanPreco.textContent = pedidos.preco[i];
      tdPreco.appendChild(spanPreco);
      tr.appendChild(tdPreco);

      // quantidade produto
      let tdQuantidade = document.createElement("td");
      tdQuantidade.className = "quantidade-produto";
      let inputQuantidade = document.createElement("input");
      inputQuantidade.type = "number";
      inputQuantidade.value = pedidos.quantidade[i];
      inputQuantidade.className = "quantidadeProd";
      tdQuantidade.appendChild(inputQuantidade);
      tr.appendChild(tdQuantidade);

      inputQuantidade.addEventListener("input", function (e) {
        pedidos.quantidade[i] = e.target.value;

        var valorTotal = 0;
        for (let i = 0; i < pedidos.preco.length; i++) {
          valorTotal += pedidos.preco[i] * pedidos.quantidade[i];
        }

        document.getElementById("valorTotal").textContent =
          valorTotal.toFixed(2);
      });

      let tdRemover = document.createElement("td");
      tdRemover.className = "remover-produto";
      let buttonRemover = document.createElement("button");
      buttonRemover.textContent = "Remover";
      buttonRemover.className = "removerProd";
      tdRemover.appendChild(buttonRemover);
      tr.appendChild(tdRemover);

      buttonRemover.addEventListener("click", function () {
        pedidos.item[i] = "";
        pedidos.quantidade[i] = 0;
        pedidos.preco[i] = 0;

        localStorage.setItem("pedidos", JSON.stringify(pedidos));

        tr.remove();

        var valorTotal = 0;
        for (let i = 0; i < pedidos.preco.length; i++) {
          valorTotal += pedidos.preco[i] * pedidos.quantidade[i];
        }

        document.getElementById("valorTotal").textContent =
          valorTotal.toFixed(2);
      });

      tbody.appendChild(tr);

      var valorTotal = 0;
      for (let i = 0; i < pedidos.preco.length; i++) {
        valorTotal += pedidos.preco[i] * pedidos.quantidade[i];
      }

      document.getElementById("valorTotal").textContent = valorTotal.toFixed(2);
      let cupom = document.getElementById("cupomDesc");
      cupom.addEventListener("input", function (e) {
        let cupom = e.target.value;
        let valorComDesconto = valorTotal;
        let msg = document.getElementById("msgCupom");

        if (cupom === "UTFPR" || cupom === "utfpr") {
          valorComDesconto *= 0.85;
          msg.textContent = "Desconto de 15% aplicado!";
          msg.style.color = "yellow";

          msg.style.display = "block";
        } else {
          msg.textContent = "Cupom iválido";
          msg.style.color = "red";
          msg.style.display = "block";
        }

        if (cupom === "") {
          msg.style.display = "none";
        }

        document.getElementById("valorTotal").textContent =
          valorComDesconto.toFixed(2);
      });
    }
  }
};

const btnFinalizar = document.querySelector("#finalizarCompra");
const user = JSON.parse(localStorage.getItem("cadastro"));

btnFinalizar.addEventListener("click", () => {
  if (user) {
    alert("Pedido Finalizado");
  } else {
    alert("Por favor, faça um cadastro para realizar uma compra.");
  }
});
