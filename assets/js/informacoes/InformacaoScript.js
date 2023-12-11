const USER = JSON.parse(localStorage.getItem("cadastro"));
const NOME = document.querySelector("#nomeInfo");
const DATA_NASC = document.querySelector("#dataNascInfo");
const EMAIL = document.querySelector("#emailInfo");
const CPF = document.querySelector("#cpfInfo");
const CEP = document.querySelector("#cepInfo");
const RUA = document.querySelector("#ruaInfo");
const BAIRRO = document.querySelector("#bairroInfo");
const CIDADE = document.querySelector("#cidadeInfo");
const NUMERO = document.querySelector("#numeroInfo");
const UF = document.querySelector("#ufInfo");

if (USER) {
  NOME.innerHTML = `${USER.nome}`;
  DATA_NASC.innerHTML = `${USER.dataNasc}`;
  EMAIL.innerHTML = `${USER.email}`;
  CPF.innerHTML = `${USER.cpf}`;
  CEP.innerHTML = `${USER.cep}`;
  RUA.innerHTML = `${USER.rua}`;
  BAIRRO.innerHTML = `${USER.bairro}`;
  CIDADE.innerHTML = `${USER.cidade}`;
  NUMERO.innerHTML = `${USER.numero}`;
  UF.innerHTML = `${USER.uf}`;
}
