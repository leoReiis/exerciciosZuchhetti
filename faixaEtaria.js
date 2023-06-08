// exercicio que classifica pessoa de acordo com sua idade;

let idade;
let categoria;

while (true) {
  idade = prompt("Por favor informe sua idade:");
  try {
    idade = parseInt(idade);
    if (isNaN(idade) || idade <= 0) {
      throw new Error("Por favor digite um valor valido!");
    }
    break;
  } catch (error) {
    console.error(error);
  }
}

switch (true) {
  case idade >= 5 && idade <= 7:
    categoria = "Infantil A";
    break;

  case idade >= 8 && idade <= 10:
    categoria = "Infantil B";
    break;

  case idade >= 11 && idade <= 13:
    categoria = "Juvenil A";
    break;

  case idade >= 14 && idade <= 17:
    categoria = "Juvenil B";
    break;

  case idade >= 18:
    categoria = "Adulto";
    break;

  default:
    categoria = "Valor Invalido";
    break;
}

// alternativamente colocar idade dentro da clausula case ?

alert(categoria);
