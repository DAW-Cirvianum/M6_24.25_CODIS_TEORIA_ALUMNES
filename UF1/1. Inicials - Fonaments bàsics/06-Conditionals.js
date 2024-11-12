// Condicionals;
// Ex - Banc;

const disponible = 4000;
const retirar = 5000;

// if (disponible > retirar) {
//   console.log("Pots retirar");
// } else {
//   console.log("No tens fons suficients");
// }

// Conditional (ternary) operator

disponible > retirar
  ? console.log("Pots retirar")
  : disponible < retirar
  ? console.log("hola")
  : console.log("adeu");

const fons = 600;
const pagar = 700;
const targeta = true;

fons > pagar
  ? console.log("Pots pagar amb el teu fons")
  : targeta
  ? console.log("Pots pagar amb targeta")
  : console.log("No, no pots pagar");
