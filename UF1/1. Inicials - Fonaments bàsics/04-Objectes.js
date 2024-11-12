// Objectes (NO PRIO ARA)

const nom = "Prèssec roig";
const preu = 300;
const disponible = true;

const producte = {
    nom: "Prèssec roig",
    preu: 300,
    disponible: true,
  };

  console.log(producte);
  console.table(producte);

  // Com accedim als diferents elements d'un objecte
  console.log(producte.disponible);

  // Destructuring, es el que anomenem a extreure valors d'un objecte amb la següent sintaxi
  const { nom, preu, disponible } = producte;
  console.log(nom);

//   // Object Literal Enhacement; afegir variables que estan fora d'un objecte i afegir-les.

//   const autenticat = true;
//   const usuari = "Pablo";

//   const nouObjecte = {
//     autenticat, // Com es diuen igual que la variable, no cal que assigni la variable
//     usuari,
//     producte: producte,
//   };

//   console.table(nouObjecte);
