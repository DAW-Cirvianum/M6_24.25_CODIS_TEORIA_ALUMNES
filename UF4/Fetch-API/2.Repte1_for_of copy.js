async function getUsers(names) {
<<<<<<< HEAD
  const token = 'token_github' // Substitueix amb el teu token d'accés
=======
  const token = 'el_meu_token_de_Gitub' // Substitueix amb el teu token d'accés
>>>>>>> 31a1189 (nous fetch)

  for (const name of names) {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`, {
        headers: {
<<<<<<< HEAD
          Authorization: `${token}`,
=======
          Authorization: `token ${token}`,
>>>>>>> 31a1189 (nous fetch)
        },
      })

      if (!response.ok) {
        console.log(`No s'ha trobat l'usuari: ${name}`)
        continue // Continua amb el següent nom si hi ha un error
      }

      const data = await response.json()
      console.log(`Usuari trobat:`, data)
    } catch (error) {
      console.log(`Error en la crida per a ${name}`)
    }
  }
}

// Exemple d'ús
console.log(getUsers(['prosfp', 'torvalds', 'usuario_inexistent']))
