**Explicació de `export default` vs `export` en JavaScript/TypeScript**

En els mòduls de JavaScript i TypeScript, hi ha dues maneres principals d'exportar codi perquè pugui ser utilitzat en altres fitxers: mitjançant `export` (exportació anomenada) i `export default` (exportació per defecte). La diferència principal entre els dos rau en com s'importen les entitats exportades i en la flexibilitat en assignar noms durant la importació.

---

### **`export` (exportació anomenada)**

- **Què és?**

  Utilitzem `export` per exportar variables, funcions, classes, etc., amb un nom específic. Pots tenir tantes exportacions anomenades com vulguis en un mòdul.

- **Sintaxi d'exportació:**

  ```javascript
  // Exportació anomenada
  export const myVariable = 42;

  export function myFunction() {
    // codi...
  }

  export class MyClass {
    // codi...
  }
  ```

- **Sintaxi d'importació:**

  Per importar exportacions anomenades, has de fer servir el mateix nom (o canviar-lo amb `as`):

  ```javascript
  // Importació d'exportacions anomenades
  import { myVariable, myFunction, MyClass } from './myModule.js';

  // Importació amb àlies (canvi de nom)
  import { myFunction as func } from './myModule.js';
  ```

- **Notes:**

  - Les exportacions anomenades s'importen entre claudàtors `{ }`.
  - Pots importar múltiples exportacions anomenades d'un sol mòdul.
  - Si intentes importar una exportació anomenada que no existeix al mòdul, obtindràs un error.

---

### **`export default` (exportació per defecte)**

- **Què és?**

  Utilitzem `export default` per exportar una sola entitat com a exportació principal del mòdul. Només pot haver-hi una exportació per defecte per mòdul.

- **Sintaxi d'exportació:**

  ```javascript
  // Exportació per defecte d'una funció
  export default function myFunction() {
    // codi...
  }

  // O bé, exportació per defecte d'una classe
  export default class MyClass {
    // codi...
  }

  // També pots assignar l'exportació per defecte a una entitat existent
  function myFunction() {
    // codi...
  }
  export default myFunction;
  ```

- **Sintaxi d'importació:**

  Quan importes l'exportació per defecte, no necessites utilitzar claudàtors i pots donar-li qualsevol nom:

  ```javascript
  // Importació de l'exportació per defecte
  import myFunc from './myModule.js';

  // El nom 'myFunc' pot ser qualsevol nom que triïs
  ```

- **Notes:**

  - Si el mòdul només té una exportació per defecte, pots importar-la directament sense claudàtors.
  - L'exportació per defecte és útil quan el mòdul vol destacar una única funcionalitat o entitat principal.

---

### **Exemple combinat**

Suposem que tens un mòdul `operacions.js` amb el següent codi:

```javascript
// Exportació anomenada
export function sumar(a, b) {
  return a + b;
}

// Exportació anomenada
export function multiplicar(a, b) {
  return a * b;
}

// Exportació per defecte
export default function restar(a, b) {
  return a - b;
}
```

**Importació en un altre fitxer:**

```javascript
// Importació de l'exportació per defecte i les exportacions anomenades
import restar, { sumar, multiplicar } from './operacions.js';

console.log(sumar(5, 3));       // Output: 8
console.log(multiplicar(5, 3)); // Output: 15
console.log(restar(5, 3));      // Output: 2
```

En aquest exemple:

- `restar` és l'exportació per defecte i s'importa sense claudàtors.
- `sumar` i `multiplicar` són exportacions anomenades i s'importen dins de claudàtors `{ }`.

---

### **Quan utilitzar `export default` i `export`**

- **Utilitza `export default` quan:**

  - El mòdul exporta una única funcionalitat principal.
  - Vols permetre als importadors donar-li qualsevol nom a l'exportació.

- **Utilitza `export` (anomenat) quan:**

  - El mòdul exporta múltiples funcionalitats.
  - Vols que els noms de les exportacions siguin coherents en tot el projecte.
  - Vols aprofitar l'autocompletat i les verificacions de noms per part de l'editor.

---

### **Resum**

- **`export`:**

  - S'utilitza per a exportacions anomenades.
  - Pots tenir múltiples exportacions anomenades per mòdul.
  - En importar, has d'utilitzar el mateix nom (o canviar-lo amb `as`).

- **`export default`:**

  - S'utilitza per a l'exportació principal o per defecte del mòdul.
  - Només pot haver-hi una per mòdul.
  - En importar, pots donar-li qualsevol nom i no necessites claudàtors.

