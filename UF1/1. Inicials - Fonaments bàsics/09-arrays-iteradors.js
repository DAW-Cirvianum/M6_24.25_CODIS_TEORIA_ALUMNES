// Tastet d'Arrays i iteradors

// Definició
const tecnologies = [20, 30, "React", "JS"];
const fruites = ["meló", "síndria", " cireres"];

// Accedir
console.log(tecnologies[2]);

// Ex. concatenació
let concatString = [];
//concatString = tecnologies + fruites;
concatString = concatString.concat(tecnologies, fruites);
//console.log(typeof concatString);

// Destructuring
const [, vary, varX] = fruites;
console.log(vary);

// forEach, map...  - Específic d'Arrays, treballarem força més endavant.
// https://www.w3schools.com/js/js_array_iteration.asp

// const numbers = [45, 4, 9, 16, 25];

// numbers.forEach(recorrer);

// function recorrer(value, index) {
//   console.log(value, index, value + 5);
// }
