// Part 1 - Implementar una funció `getData` genèrica per fer peticions http

const getData = async (url) => {
  try {
    // Si fem servir "await" el codi no continuarà fins que no s'hagi resolt
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    // Ens falta "parsejar" la resposta JSON
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error: ', error)
  }
}

// Una funció que em retorni el preu dels lloguers
const getRentPrices = async () => {
  const url =
    'https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/59057?nult=10'
  try {
    const data = await getData(url)
    return data
  } catch (error) {
    console.error('Error: ', error)
    return []
  }
}

getRentPrices().then((data) => console.log(data))
