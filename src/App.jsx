import { useState, useEffect } from 'react'

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {
  const [filteredmovies, setFilteredMovies] = useState(movies) /* nuovo array con film filtrati */
  const [searchGenre, setSearchGenre] = useState("") /* searchGenre è lo stato attuale, setSearchGenre è la funzione per aggiornarlo, useState("") lo inizializziamo con una stringa vuota */



  return (
    <>

    </>
  )
}

export default App
