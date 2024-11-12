async function getUsers(names) {
    const promeses = names.map(async name => {
      try {
        const resposta = await fetch(`https://api.github.com/users/${name}`);
  
        if (!resposta.ok) {
          return null;
        }
  
        return await resposta.json();
      } catch (error) {
        return null;
      }
    });
  
    return promeses; // Retornem l'array de promeses, no els resultats resolts
  }
  
  const users = getUsers(['user1', 'user2', 'user3']);
  console.log(users); // Mostra un array de promeses, no de resultats
  
//   En aquest cas:
// La funció getUsers retorna promeses, que és un array de promeses no resoltes
// en lloc dels resultats finals (l'array de dades o null per als usuaris). Quan
// facis console.log(users), veuràs un array de promeses en comptes de veure un
// array amb els resultats resolts.