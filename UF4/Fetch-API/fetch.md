Tinc el següent exemple:

```javascript
const hola = async () => console.log("hola");

const result = hola();
console.log(result); // Mostra una promesa
```

### Explicació detallada

1. Quan executes `hola()`, s'entra a la funció `hola` i el codi dins d'ella s'executa immediatament. Això inclou `console.log("hola")`, que imprimeix `"hola"` a la consola.
   
2. Després que `console.log("hola")` s'executi, la funció `hola` finalitza. Com que `hola` és `async`, retorna automàticament una promesa. Aquesta promesa es resol amb `undefined` perquè no hi ha un `return` explícit.

3. El `console.log(result)` fora de la funció mostra `Promise { <state>: "fulfilled" }`, ja que `hola` retorna una promesa que s’ha completat, però amb el valor `undefined`.

### Per què no has de "gestionar" la promesa perquè es mostri el `console.log`?

El `console.log("hola")` dins de `hola` és codi síncron, així que s'executa immediatament quan es crida la funció. La part "asíncrona" és el que retorna la funció (`Promise`) després que s'executi el codi de dins. Per això, veus `"hola"` immediatament, sense haver de "gestionar" la promesa amb `await` o `.then()`.

### Exemple amb `setTimeout` per afegir un retard

```javascript
const hola = async () => {
  console.log("Inici de hola");
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Retard de 2 segons
  console.log("Final de hola"); // Aquesta línia s'executa després del retard
};

hola().then(() => console.log("La promesa ha estat resolta"));
```

### Explicació del nou codi

1. La funció `hola` imprimeix `"Inici de hola"` immediatament quan es crida.
2. A continuació, trobem `await new Promise(...)`. Aquesta línia crea una promesa que es resol després d'un retard de 2 segons (gràcies a `setTimeout`).
3. La funció `hola` es "pausa" en aquesta línia fins que la promesa es resol, de manera que `"Final de hola"` s'imprimeix després del retard.
4. Quan la promesa es resol (després dels 2 segons), `hola` continua i es resol completament.
5. Quan `hola()` es completa, el `.then()` s'executa i imprimeix `"La promesa ha estat resolta"`.

### Comprovació amb `await`

Si estàs en un context `async`, també pots fer servir `await` per esperar que `hola` es completi:

```javascript
const main = async () => {
  console.log("Abans de cridar hola");
  await hola();
  console.log("Després de que hola es resolgui");
};

main();
```

Aquest codi produeix la següent sortida en ordre:

1. `"Abans de cridar hola"`
2. `"Inici de hola"`
3. (Després de 2 segons) `"Final de hola"`
4. `"Després de que hola es resolgui"`

En aquest cas, estàs "gestionant" la promesa que retorna `hola` amb `await` per assegurar-te que es completi abans de passar a la següent línia.