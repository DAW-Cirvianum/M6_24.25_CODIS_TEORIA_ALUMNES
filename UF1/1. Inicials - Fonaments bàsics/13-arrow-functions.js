// ARROW FUNCTIONS

// Comparació entre la declaració de funcions normal i la declaració de funcions amb fletxa:

// As a callback function for an array method like map, filter, or reduce:

const numbers = [1, 2, 3, 4, 5];

// Using a regular function
const squared = numbers.map(function (num) {
  return num * num;
});

// Using an arrow function
const squared2 = numbers.map((num) => num * num);

// OBJECTES PREDEFINITS

// THIS

// En aquest exercici, heu de fer un petit canvi perquè l'última línia retorni "Ford" en lloc de "undefined".

const car = {
  brand: "Ford",
  getBrand: function () {
    console.log(this.brand);
    return "hola";
  },
};
car.getBrand(); // Què surt aqui
const cardBrandFunction = car.getBrand;
cardBrandFunction(); // Què surt aqui

//
