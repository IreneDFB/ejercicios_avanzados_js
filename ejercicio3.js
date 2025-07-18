function contarSonidosFavoritos(users) {
  const contadorSonidos = {}

  for (const user of users) {
    for (const sound in user.favoritesSounds) {
      if (contadorSonidos[sound]) {
        contadorSonidos[sound]++
      } else {
        contadorSonidos[sound] = 1
      }
    }
  }

  console.log('Conteo de sonidos favoritos:')
  console.log(contadorSonidos)
  return contadorSonidos
}

contarSonidosFavoritos(users)
