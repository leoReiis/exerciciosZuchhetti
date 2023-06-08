// Escrever um algoritmo que leia o codigo do item do pedido, a quantide e o valor a ser pago
// por aquele lanche. A Cada execucao somente sera calculado 1 item;

// Podemos fazer um vetor de objetos

const MENU = [
  { code: "100", name: "hotDogCod", price: 1.2 },
  { code: "101", name: "bauruCod", price: 1.3 },
  { code: "102", name: "bauruWithEggsCod", price: 1.5 },
  { code: "103", name: "hamburguerCod", price: 1.2 },
  { code: "104", name: "cheeseBurguerCod", price: 1.3 },
  { code: "105", name: "sodaCod", price: 1.0 },
];

// No throw exception this time !

let codProd = prompt("Por favor informe o codigo do produto!");
let qtde = prompt("Por favor informe a quantidade escolhida!");

function getPriceByCode(codProd) {
  let itemMenu = MENU.find((item) => item.code === codProd); // estudar a propriedade find*

  if (itemMenu) {
    return itemMenu.price;
  }
  return null;
}

function orderTotal(qtde, codProd) {
  let prodValue = getPriceByCode(codProd);

  return prodValue * qtde;
}

alert(orderTotal(qtde, codProd));
