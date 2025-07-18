function obtenerCategoriasUnicas(peliculas) {
  const categoriasUnicas = []

  for (const pelicula of peliculas) {
    for (const categoria of pelicula.categories) {
      if (!categoriasUnicas.includes(categoria)) {
        categoriasUnicas.push(categoria)
      }
    }
  }

  console.log(categoriasUnicas)
  return categoriasUnicas
}

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

obtenerCategoriasUnicas(movies)
