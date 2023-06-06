let peso;
let altura;

while (true) {
  peso = prompt("Digite seu Peso");

  try {
    peso = parseFloat(peso);
    if (isNaN(peso) || peso <= 0) {
      throw new Error("Digite corretamente o valor do seu peso !");
    }
    break;
  } catch (error) {
    console.error(error);
  }
}

while (true) {
  altura = prompt("Digite sua altura");
  try {
    altura = parseFloat(altura);
    if (isNaN(altura) || altura <= 0) {
      throw new Error("Digite sua altura corretamente");
    }
    break;
  } catch (error) {
    console.error(error);
  }
}

function calculaImc(peso, altura) {
  return (peso / altura ** 2);
}

let imc = calculaImc(peso, altura);

let categoria;

switch (true) {
  case imc < 18.5:
    categoria = "Abaixo do peso";
    break;

  case imc >= 18.5 && imc < 25:
    categoria = "Peso normal";
    break;

  case imc >= 25 && imc < 30:
    categoria = "Acima do Peso";
    break;

  default:
    categoria = "Obeso kkkkk";
    break;
}

alert(categoria);
