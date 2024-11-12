// Funcions - Function declaration

// Funció sumar

console.log(sumar(2, 3));
console.log(hola);
var hola = "hola";
console.log(hola);

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

console.log(sumar2());

//Retorn en forma d'objecte:
function sumar2(numero1, numero2) {
  return {
    resultat2: numero1 + numero2,
    missatge: "Hola món",
  };
}
const objecte1 = sumar2(2, 3);

console.log(objecte1);

// HOISTING - A JS no he de cridar la funció necessàriament després de crearla. Ho puc fer abans.
