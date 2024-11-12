Aquí tens un guió amb els codis necessaris per explicar el **Call Stack** de JavaScript, basant-nos en la presentació que estàs utilitzant:

#### Definició:
El **Call Stack** és el mecanisme que utilitza el motor de JavaScript per portar el control de les funcions que s'estan executant i les funcions que han estat cridades des de dins d'altres funcions.

En termes simples, funciona com una pila (stack): **l'últim en entrar és el primer en sortir (LIFO)**. Cada vegada que una funció és cridada, es col·loca en la pila. Quan una funció acaba, es treu de la pila i es reprèn l'execució de la funció anterior.

#### Exemple pràctic: Codi per a la demostració del Call Stack

Com pots demostrar que un triangle és rectangle si coneixes les longituds dels seus tres costats? Una manera de fer-ho és comprovar **si la suma dels quadrats dels dos costats més curts és igual al quadrat del costat més llarg**. Aquesta és la base del teorema de Pitàgores.


```javascript
// Funció per calcular el quadrat d'un número
function square(num) {
  return multiply(num, num);
}

// Funció per multiplicar dos nombres
function multiply(a, b) {
  return a * b;
}

// Funció per comprovar si un triangle és rectangle
function isRightTriangle(a, b, c) {
  return square(a) + square(b) === square(c);
}

// Cridem la funció principal
console.log(isRightTriangle(3, 4, 5)); // true
```

**Explicació del Call Stack en aquest exemple:**

1. **Crida a `isRightTriangle(3, 4, 5)`**:
   - Entra en la pila, executa el codi de la funció `isRightTriangle`.
   - A `isRightTriangle`, es crida a `square(3)` i es posa en la pila.

2. **Crida a `square(3)`**:
   - Entra en la pila i crida a `multiply(3, 3)`.

3. **Crida a `multiply(3, 3)`**:
   - Entra en la pila, calcula `3 * 3 = 9` i es treu de la pila, retornant `9` a `square(3)`.

4. **Torna a `isRightTriangle(3, 4, 5)`**:
   - Rep el resultat de `square(3)` i després crida a `square(4)`.

5. **Repetim el mateix procés per `square(4)` i `square(5)`**, actualitzant el Call Stack i retornant el resultat final.

### Explicació visual:
Cada vegada que cridem una funció, s'afegirà al Call Stack. Quan s'acaba l'execució d'una funció, es treu de la pila i es continua amb la funció que es va deixar pendent.

---

#### Exemples addicionals:

```javascript
function first() {
  console.log("Primera funció");
  second();
  console.log("Primera funció - Final");
}

function second() {
  console.log("Segona funció");
  third();
  console.log("Segona funció - Final");
}

function third() {
  console.log("Tercera funció");
}

first();
```

**Sortida esperada:**
```
Primera funció
Segona funció
Tercera funció
Segona funció - Final
Primera funció - Final
```

**Explicació del Call Stack:**

1. `first()` entra en el Call Stack.
2. Crida a `second()`, es posa al damunt de `first()`.
3. `second()` crida a `third()`, es posa al damunt de `second()`.
4. `third()` s'executa i es treu de la pila.
5. `second()` finalitza i es treu de la pila.
6. `first()` finalitza i es treu de la pila.

---

Aquesta demostració ajudarà a entendre millor com funciona el Call Stack, que és un concepte fonamental en la gestió de funcions a JavaScript.