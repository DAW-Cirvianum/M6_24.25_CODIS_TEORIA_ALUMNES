// Com puc mostrar tots els articles i el seu preu un  darrere l'altre?

// FOR
for (let i = 0; i < articles.length; i++) {
  console.log(`Article: ${articles[i].nom}, Preu: ${articles[i].preu}€`);
  console.log(
    "Article: " + articles[i].nom + "Preu: " + articles[i].preu + "€"
  );
}

// WHILE
let i = articles.length - 1;
while (i >= 0) {
  console.log(articles[i]);
  i--;
}

// DO WHILE
let y = articles.length - 1;
do {
  console.log(articles[y]);
  y--;
} while (i >= 0);

// FOR INVERTIT

for (let i = articles.length - 1; i >= 0; i--) {
  console.log(articles[i]);
}

// FOR EACH

articles.forEach((article) => {
  console.log(article);
});
