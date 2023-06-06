let notas = [];
let qtdeNotas = notas.length;

let numeroNotas;

while (true) {
  numeroNotas = prompt("Qual e o numero de notas ?");

  try {
    numeroNotas = parseInt(numeroNotas);
    if (isNaN(numeroNotas) || numeroNotas <= 0) {
      throw new Error("O numero de notas deve ser um valor inteiro!");
    }
    break;
  } catch (error) {
    console.error(error);
  }
}

let valorNota;

for (let i = 0; i < numeroNotas; i++) {
  while (true) {
    try {
      valorNota = parseFloat(prompt(`Digite o ${i + 1} valor`));
      if (isNaN(valorNota) || valorNota <= 0) {
        throw new Error("Por favor digite uma nota valida!");
      }
      break;
    } catch (error) {
      console.error(error);
    }
  }
  notas.push(Number(valorNota));
}

function calcularMedia(notas) {
  let soma = 0;
  notas.forEach((value) => {
    soma += value;
  });
  return soma / notas.length;
}

let media = calcularMedia(notas);
alert(`Sua media e ${media}`);
