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

  useEffect(() => {  /* useEffect esegue il codice quando qualcosa cambia */

    let updated = movies /* salvo i film nella variabile updated */

    if (searchGenre !== "") { /* uso la negazione per dire che se la categoria non è vuota, allora è quella scelta dall'utente */
      updated = movies.filter(movies => movies.genre === searchGenre) /* confronto ogni film con il genere cercato */
    }
  })




  return (
    <>

    </>
  )
}

export default App
