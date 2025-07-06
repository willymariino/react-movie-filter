// Importiamo gli hook useState e useEffect da React
import { useState, useEffect } from 'react'

// Definiamo un array di oggetti, ognuno rappresenta un film con titolo e genere
const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {

  const [filteredmovies, setFilteredMovies] = useState(movies) // Stato che contiene la lista dei film filtrati, inizialmente tutti i film

  const [searchGenre, setSearchGenre] = useState("") // Stato che contiene il genere selezionato dall'utente per la ricerca

  // useEffect viene eseguito ogni volta che searchGenre cambia
  useEffect(() => {

    let updated = movies // salvo i film nella variabile updated

    // Se l'utente ha selezionato un genere, filtriamo i film per quel genere
    if (searchGenre !== "") { // uso la negazione per dire che se la categoria non è vuota, è quella scelta dall'utente
      updated = movies.filter(movie => movie.genre === searchGenre) // confornto ogni film con il genere cercato
    }

    // Aggiorniamo lo stato con la lista filtrata
    setFilteredMovies(updated)
  }, [searchGenre]) // Dipendenza corretta: solo searchGenre, perché movies non cambia mai

  // Renderizziamo il componente
  return (
    <>

      <h1>lista dei film</h1>

      {/* Sezione per la ricerca dei film per genere */}
      <section>
        <h2>cerca i film</h2>
        {/* Select per scegliere il genere, aggiorna lo stato searchGenre al cambiamento */}
        <select value={searchGenre} onChange={e => setSearchGenre(e.target.value)}>
          <option value="">scegli il genere</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Romantico">Romantico</option>
          <option value="Thriller">Thriller</option>
          <option value="Azione">Azione</option>
        </select>
      </section>

      {/* Lista dei film filtrati, ogni elemento mostra genere e titolo */}
      <ul>
        {filteredmovies.map((movie, index) => (
          <li key={index}> {movie.genre}, {movie.title}</li>
        ))}
      </ul>
    </>
  )
}


export default App

/* 

Ho rimosso la dipendenza 'movies' dall'array delle dipendenze di useEffect, lasciando solo 'searchGenre'.  

 L'array delle dipendenze di useEffect serve a dire a React quando deve rieseguire l'effetto. La variabile 'movies' è una costante dichiarata fuori dal componente e non cambia mai durante il ciclo di vita del componente. Includerla tra  le dipendenze è inutile e può generare un warning, perché React si aspetta che le dipendenze siano valori che possono  cambiare e causare un nuovo rendering. In questo caso, solo 'searchGenre' può cambiare e quindi basta come dipendenza. 

*/