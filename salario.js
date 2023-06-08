let codigoCargo;
let salarioLiq;

let listaCodigos = ["101", "102", "103"];

while (true) {
  codigoCargo = prompt("Informe o codigo do Cargo");
  let existeCodigo = listaCodigos.find((element) => element === codigoCargo);
  if (existeCodigo) break;
}

salarioLiq = 0;

while (true) {
  salarioLiq = prompt("Digite o valor do seu salario liquido");

  try {
    salarioLiq = parseFloat(salarioLiq);
    if (isNaN(salarioLiq) || salarioLiq <= 0) {
      throw new Error("Valor de salario Invalido");
    }
    break;
  } catch (error) {
    console.log(error);
  }
}

function calcularAumento(valorSalario, percentual) {
  return valorSalario * percentual;
}

console.log(codigoCargo);
console.log(salarioLiq);

switch (codigoCargo) {
  case "101":
    novoValorSalario = calcularAumento(salarioLiq * 0.1);
    break;

  case "102":
    novoValorSalario = calcularAumento(salarioLiq * 0.2);
    break;

  case "103":
    novoValorSalario = calcularAumento(salarioLiq * 0.3);
    break;

  default:
    novoValorSalario = calcularAumento(salarioLiq * 0.4);
    break;
}

alert(novoValorSalario);
