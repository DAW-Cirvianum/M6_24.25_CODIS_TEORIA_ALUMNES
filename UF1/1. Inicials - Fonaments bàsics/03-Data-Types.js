// Tipus de dades

// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// Undefined
let client;
console.log(client);
console.log(typeof client);

// Boolean
const descompte = false;

// //  Number
// const numero1 = 20.2;
// const numero2 = 30;
// const numero3 = -100;
// const numero4 = "123";

// const nouNum = Number(numero4);
// console.log(numero4, nouNum);

// No existeixen flotants, fraccions, absoluts... tot és "number"

const alumne = "Pablo"; // Puc fer ús de cometes simples també 'Pablo'

const numeroGran = BigInt(94923492394501293598230948203984092384);
console.log(100 + Number(numeroGran));

// Null
const descompte2 = null;

//Symbol - Son únics encara que tinguin el mateix valor!
const primerSymbol = Symbol(30);
const segonSymbol = Symbol(30);
console.log(primerSymbol === segonSymbol);
console.log(primerSymbol.valueOf());
console.log(segonSymbol.valueOf());
