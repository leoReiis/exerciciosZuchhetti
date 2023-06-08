let tipoMedia;
let notas = [];
let valorTotal;
let valorNota;

tipoMedia = prompt(`Informe o tipo de media.
                    1. aritimetica 
                    2. ponderada`);

valorTotal = 0; // importante a inicializacao de valor;

for (let i = 1; i <= 3; i++) {
  valorNota = Number(prompt(`Informe o valor da ${i} nota`));
  notas.push(Number(valorNota));
  valorTotal += valorNota;
}

function mediaAritimetica(valorTotal) {
  return valorTotal / 3;
}

// peso da media ponderada fixo!
function mediaPonderada(notas, valorTotal) {
  let soma = notas[0] * 3 + notas[1] * 3 + notas[2] * 4;
  return soma / 10; // 10 e a soma dos pesos do exemplo;
}

let resultadoCalculo;

if (tipoMedia == 1) {
  resultadoCalculo = mediaAritimetica(valorTotal);
} else if (tipoMedia == 2) {
  resultadoCalculo = mediaPonderada(notas, valorTotal);
} else alert("Informe um valor Correto");

alert(resultadoCalculo);

// podem ser feitas varias melhorias  na entrada dos valores
