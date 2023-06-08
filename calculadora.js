let number1;
let number2;
let operacao;

while (true) {
  number1 = prompt("Digite o primeiro numero");
  try {
    number1 = parseFloat(number1);
    if (isNaN(number1)) {
      throw new Error("Digite um numero valido!");
    }
    break;
  } catch (error) {
    console.error(error);
  }
}

while (true) {
  number2 = prompt("Digite o segundo numero");
  try {
    number2 = parseFloat(number2);
    if (isNaN(number2)) {
      throw new Error("Digite um numero valido!");
    }
    break;
  } catch (error) {
    console.error(error);
  }
}

operacao = prompt(`Qual operacao deseja fazer`);

let resultadoOperacao;

switch (operacao) {
  case "*":
    resultadoOperacao = number1 * number2;
    console.log("Teste multiplic");
    break;

  case "/":
    resultadoOperacao = number1 / number2;
    console.log("div");
    break;

  case "+":
    resultadoOperacao = number1 + number2;
    break;

  case "-":
    resultadoOperacao = number1 - number2;
    break;

  case "**":
    resultadoOperacao = number1 ** number2;
    break;

  default:
    alert("Opcao invalida");
}

alert(resultadoOperacao);
