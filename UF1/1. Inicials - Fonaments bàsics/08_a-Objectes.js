// Objectes

// Com es declaren?
// const producte = {
//   nom: "Prèssec",
//   preu: 300,
//   disponible: true,
// };

// console.log(producte);
// console.table(producte);

// Com accedim?
// console.log(producte.preu);

// Destructuring
//const { nom, preu, disponible } = producte;

// Object Literal Enhacement; afegir variables que estan fora d'un objecte.
const autenticat = true;
const usuari = "Juan";

// const nouObjecte = {
//   autenticat,
//   usuari,
//   producte: producte,
// };

// console.table(nouObjecte);

// Afegir un nou paràmetre

//console.log(producte);

// Destructuring amb 2 o més objectes???
const producte = {
  nom: "Prèssec",
  preu: 300,
  disponible: true,
};

const client = {
  nom: "Joan",
  soci: true,
};

const { nom: nomProducte, preu, disponible } = producte;
const { nom: nomClient, soci } = client;

console.log(nomProducte, nomClient);
