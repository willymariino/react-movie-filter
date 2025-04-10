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

    if (searchGenre !== "") { // uso la negazione per dire che se la categoria non è vuota, allora è quella scelta dall'utente */
      updated = movies.filter(movie => movie.genre === searchGenre) /* confronto ogni film con il genere cercato */
    }

    setFilteredMovies(updated) //aggiorna lo stato con il nuovo array filtrato 
  }, [searchGenre, movies]) // dipendenza array, vuol dire che fa eseguire il codice ogni volta che uno dei due cambia



  return (
    <>

      <h1>lista dei film</h1>

      <section>
        <h2>cerca i film</h2>
        <select value={searchGenre} onChange={e => setSearchGenre(e.target.value)}>
          <option value="">scegli il genere</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Romantico">Romantico</option>
          <option value="Thriller">Thriller</option>
          <option value="Azione">Azione</option>
        </select>
      </section>

      <ul>
        {filteredmovies.map((movie, index) => (
          <li key={index}> {movie.genre}</li>

        )

        )}

      </ul>
    </>
  )
}

export default App
