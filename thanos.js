var personagens_marvel = [
  "Homem de Ferro",
  "Capitão América",
  "Thor",
  "Hulk",
  "Viúva Negra",
  "Gavião Arqueiro",
  "Pantera Negra",
  "Doutor Estranho",
  "Homem-Aranha",
  "Feiticeira Escarlate",
  "Visão",
  "Falcão",
  "Máquina de Combate",
  "Soldado Invernal",
  "Guardiões da Galáxia",
  "Homem-Formiga",
  "Vespa",
  "Capitã Marvel",
  "Thanos",
  "Loki",
  "Gamora",
  "Rocket Raccoon",
  "Groot",
  "Drax",
  "Nebulosa",
  "Ultron",
  "Hela",
  "Erik Killmonger",
  "Killgrave",
  "Mysterio",
  "Venom",
  "Carnificina",
  "Magneto",
  "Jean Grey",
  "Wolverine",
  "Deadpool",
  "Professor Xavier",
  "Colossus",
  "Tempestade",
  "Vampira",
  "Mercúrio",
  "Feiticeiro Supremo",
  "Shuri",
  "Valquíria",
  "Homem-Formiga (Scott Lang)",
  "Gaviã Arqueira",
  "Yondu",
  "Nakia",
  "Okoye",
  "Shuri",
  "Homem-Formiga (Hank Pym)",
  "Mantis",
  "Nebula",
  "Valkyrie",
  "Groot (Baby Groot)",
  "Homem-Formiga (Cassie Lang)",
  "Korg",
  "Negação",
];

let eliminados = personagens_marvel.length * 0.5;
let personagensRemovidos = [];
let indiceAleatorio;

for (i = 0; i < eliminados; i++) {
  indiceAleatorio = Math.floor(Math.random() * personagens_marvel.length);
  personagensRemovidos.push(personagens_marvel.splice(indiceAleatorio, 1)[0]);
}

// estava me voltando um array de array em personagensRemovidos, como retorna apenas um nome, foi possivel
// pegar ele diretamente no indice 0;

console.log(personagens_marvel);
console.log(personagensRemovidos);
