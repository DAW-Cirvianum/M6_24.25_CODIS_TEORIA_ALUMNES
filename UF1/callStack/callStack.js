// Funció per multiplicar dos nombres
function multiply(a, b) {
  return a * b
}

// Funció per calcular el quadrat d'un número
function square(num) {
  return multiply(num, num)
}

// Funció per comprovar si un triangle és rectangle
function isRightTriangle(a, b, c) {
  return square(a) + square(b) === square(c)
}

// Cridem la funció principal
console.log(isRightTriangle(3, 4, 5)) // true
