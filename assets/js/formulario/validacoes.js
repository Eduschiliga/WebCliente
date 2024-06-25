const form = document.querySelector("#formCad");
// inputs formulario
const enviar = document.querySelector("#enviar");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const cpfInput = document.querySelector("#cpf");
const cepInput = document.querySelector("#cep");
const ruaInput = document.querySelector("#rua");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");
const ufInput = document.querySelector("#uf");
const numeroInput = document.querySelector("#numero");
const dataNascInput = document.querySelector("#dataNasc");
const senhaInput = document.querySelector("#senha");

// labels formulario
const nomeLbl = document.querySelector("#lblNome");
const emailLbl = document.querySelector("#lblEmail");
const cpfLbl = document.querySelector("#lblCpf");
const cepLbl = document.querySelector("#lblCep");
const ruaLbl = document.querySelector("#lblRua");
const bairroLbl = document.querySelector("#lblBairro");
const cidadeLbl = document.querySelector("#lblCidade");
const ufLbl = document.querySelector("#lblUf");
const numeroLbl = document.querySelector("#lblNumero");
const dataNascLbl = document.querySelector("#lblDataNasc");
const senhaLbl = document.querySelector("#lblSenha");

// campos validos
let isValidNome = false;
let isValidEmail = false;
let isValidCpf = false;
let isValidCep = false;
let isValidRua = false;
let isValidBairro = false;
let isValidCidade = false;
let isValidUf = false;
let isValidNumero = false;
let isValidDataNasc = false;
let isValidSenha = false;

function validateCEP(cep) {
  return /^[0-9]{8}$/.test(cep);
}

async function buscarCep(cep) {
  const cepLbl = document.querySelector("#lblCep");

  if (!validateCEP(cep)) {
    cepLbl.setAttribute("style", "color: red");
    cepLbl.innerHTML = "CEP * Deve conter 8 caracteres *";
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      cepLbl.setAttribute("style", "color: red");
      cepLbl.innerHTML = "CEP * CEP não encontrado *";
      return;
    }

    // Preenchendo os campos com os dados do endereço
    document.querySelector("#cidade").value = data.localidade;
    document.querySelector("#uf").value = data.uf;

    // Atualizando o estilo dos labels
    cepLbl.setAttribute("style", "color: green");
    cepLbl.innerHTML = "CEP";
    document.querySelector("#lblCidade").setAttribute("style", "color: green");
    document.querySelector("#lblUf").setAttribute("style", "color: green");
  } catch (error) {
    console.error("Erro ao buscar o CEP:", error);
    cepLbl.setAttribute("style", "color: red");
    cepLbl.innerHTML = "CEP * Erro ao buscar CEP *";
  }
}

function cancelar() {
  document.getElementById("formCadastro").reset();
}


// mensagens de erro
const msgError = document.querySelector("#msgError");
const msgSuccess = document.querySelector("#msgSuccess");

nomeInput.addEventListener("keyup", () => {
  if (nomeInput.value.length <= 3) {
    nomeLbl.setAttribute("style", "color: red");
    nomeLbl.innerHTML = "Nome * Insira no minimo 3 caracteres *";
  } else {
    isValidNome = true;
    nomeLbl.setAttribute("style", "color: green");
    nomeLbl.innerHTML = "Nome";
  }
});

emailInput.addEventListener("blur", function () {
  if (!isEmailValid(emailInput.value)) {
    emailLbl.setAttribute("style", "color: red");
  } else {
    isValidEmail = true;
    emailLbl.setAttribute("style", "color: green");
    emailLbl.innerHTML = "E-mail";
  }
});

cpfInput.addEventListener("blur", function () {
  if (cpfInput.value.length <= 10) {
    cpfLbl.setAttribute("style", "color: red");
    cpfLbl.innerHTML = "CPF * Deve conter 11 caracteres *";
  } else if (!validateCPF(cpfInput.value)) {
    cpfLbl.setAttribute("style", "color: red");
    cpfLbl.innerHTML = "CPF * CPF inválido *";
  } else {
    isValidCpf = true;
    cpfLbl.setAttribute("style", "color: green");
    cpfLbl.innerHTML = "CPF";
  }
});

cepInput.addEventListener("blur", function () {
  if (!validateCEP(cepInput.value)) {
    cepLbl.setAttribute("style", "color: red");
    cepLbl.innerHTML = "CEP * Deve conter 8 caracteres *";
  } else {
    isValidCep = true;
    cepLbl.setAttribute("style", "color: green");
    cepLbl.innerHTML = "CEP";
  }
});

ruaInput.addEventListener("keyup", function () {
  if (ruaInput.value.length <= 5) {
    ruaLbl.setAttribute("style", "color: red");
    ruaLbl.innerHTML = "Rua * Deve conter no minimo 10 caracteres *";
  } else {
    isValidRua = true;
    ruaLbl.setAttribute("style", "color: green");
    ruaLbl.innerHTML = "Rua";
  }
});

bairroInput.addEventListener("keyup", function () {
  if (bairroInput.value.length <= 5) {
    bairroLbl.setAttribute("style", "color: red");
    bairroLbl.innerHTML = "Bairro * Deve conter no minimo 5 caracteres *";
  } else {
    isValidBairro = true;
    bairroLbl.setAttribute("style", "color: green");
    bairroLbl.innerHTML = "Bairro";
  }
});

cidadeInput.addEventListener("keyup", function () {
  if (cidadeInput.value.length <= 3) {
    cidadeLbl.setAttribute("style", "color: red");
    cidadeLbl.innerHTML = "Cidade * Deve conter no minimo 3 caracteres *";
  } else {
    isValidCidade = true;
    cidadeLbl.setAttribute("style", "color: green");
    cidadeLbl.innerHTML = "Cidade";
  }
});

ufInput.addEventListener("blur", function () {
  if (ufInput.value == "") {
    ufLbl.setAttribute("style", "color: red");
    ufLbl.innerHTML = "UF * Campo obrigatório *";
  } else {
    isValidUf = true;
    ufLbl.setAttribute("style", "color: green");
    ufLbl.innerHTML = "UF";
  }
});

numeroInput.addEventListener("blur", function () {
  if (numeroInput.value == "") {
    numeroLbl.setAttribute("style", "color: red");
    numeroLbl.innerHTML = "Número * Campo obrigatório *";
  } else {
    isValidNumero = true;
    numeroLbl.setAttribute("style", "color: green");
    numeroLbl.innerHTML = "Número";
  }
});

dataNascInput.addEventListener("blur", function () {
  if (!validateAge(dataNascInput.value, 18)) {
    dataNascLbl.setAttribute("style", "color: red");
    dataNascLbl.innerHTML = "Data de Nascimento * Idade menor que 18 anos *";
  } else {
    isValidDataNasc = true;
    dataNascLbl.setAttribute("style", "color: green");
    dataNascLbl.innerHTML = "Data de Nascimento";
  }
});

senhaInput.addEventListener("keyup", function () {
  if (!validatePassword(senhaInput.value, 8)) {
    senhaLbl.setAttribute("style", "color: red");
    senhaLbl.innerHTML = "Senha * Deve conter no minimo 8 caracteres *";
  } else {
    isValidSenha = true;
    senhaLbl.setAttribute("style", "color: green");
    senhaLbl.innerHTML = "Senha";
  }
});

enviar.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    isValidNome &&
    isEmailValid &&
    isValidCpf &&
    isValidCep &&
    isValidRua &&
    isValidBairro &&
    isValidCidade &&
    isValidUf &&
    isValidNumero &&
    isValidDataNasc &&
    isValidSenha
  ) {
    cadastrar();
  } else {
    msgErro("Preencha todos os campos");
  }
});

function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  return emailRegex.test(email);
}

function validatePassword(senha, minDigits) {
  return senha.length >= minDigits;
}

function validateCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  var result = true;
  [9, 10].forEach(function (j) {
    var soma = 0,
      r;
    cpf
      .split(/(?=)/)
      .splice(0, j)
      .forEach(function (e, i) {
        soma += parseInt(e) * (j + 2 - (i + 1));
      });
    r = soma % 11;
    r = r < 2 ? 0 : 11 - r;
    if (r != cpf.substring(j, j + 1)) result = false;
  });
  return result;
}

function validateCEP(cep) {
  cep = cep.replace(/\D/g, "");
  return cep.toString().length === 8;
}

function validateAge(dataNasc, minAge) {
  const birthDate = new Date(dataNasc);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const m = currentDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age >= minAge;
}

function msgErro(msg) {
  msgSuccess.setAttribute("style", "display: none");
  msgSuccess.innerHTML = "";
  msgError.setAttribute("style", "display: block");

  msgError.innerHTML = `<strong>${msg}</strong>`;
}

function limpaMsgErro() {
  msgError.setAttribute("style", "display: none");
  msgError.innerHTML = "";
}

function msgSucesso() {
  msgError.setAttribute("style", "display: none");
  msgError.innerHTML = "";

  msgSuccess.setAttribute("style", "display: block");
  msgSuccess.innerHTML = "<strong>Cadastrando Usuário...</strong>";
}

function cadastrar() {
  const cadastro = {
    nome: nomeInput.value,
    email: emailInput.value,
    cpf: cpfInput.value,
    cep: cepInput.value,
    rua: ruaInput.value,
    bairro: bairroInput.value,
    cidade: cidadeInput.value,
    uf: ufInput.value,
    numero: numeroInput.value,
    dataNasc: dataNascInput.value,
    senha: senhaInput.value,
  };

  localStorage.setItem("cadastro", JSON.stringify(cadastro));

  limpaMsgErro();
  msgSucesso();

  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
}
