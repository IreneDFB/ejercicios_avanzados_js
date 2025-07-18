function calcularMediaVolumen(users) {
  let sumaVolumenes = 0
  let cantidadVolumenes = 0

  for (const user of users) {
    for (const sound in user.favoritesSounds) {
      const volumen = user.favoritesSounds[sound].volume
      sumaVolumenes += volumen
      cantidadVolumenes++
    }
  }

  const media = sumaVolumenes / cantidadVolumenes
  console.log(`Media de volumen: ${media}`)
  return media
}

calcularMediaVolumen(users)
