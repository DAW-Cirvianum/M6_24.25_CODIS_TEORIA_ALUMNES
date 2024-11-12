async function getUsers(names) {
<<<<<<< HEAD
  const token = 'token_github' // Substitueix amb el teu token d'accés
=======
  const token = 'el_meu_token_de_github' // Substitueix amb el teu token d'accés
>>>>>>> 31a1189 (nous fetch)

  const users = await Promise.all(
    names.map(async (name) => {
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

        if (!response.ok) return null // Retorna null si l'usuari no existeix o hi ha hagut un error

        return await response.json()
      } catch (error) {
        return null // Retorna null en cas d'error de xarxa
      }
    })
  )
  return users
}

// Exemple d'ús
getUsers(['prosfp', 'torvalds', 'usuario_inexistent']).then((result) =>
  console.log(result)
)
