import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type Movie = {
  id: number,
  name: string;
  year: string;
};

function App() {
  const [ count, setCount ] = useState(0)
  const [ movies, setMovies ] = useState<Movie[]>([])

    useEffect(()  => {
        fetch("http://localhost:5240/api/Movies")
          .then(data => data.json())
          .then(data => setMovies(data))
          .then(data => console.log(data))
    }, []);


    return ( // Better solution
      <p>
        {movies.map((value) => // The map is important because it loops through the movie list and if it is empty, it returns null instead of BREATKING (The code otherwise breaks if trying to access a variable that has not yet loaded from the database)  
          <p>{value.name}</p>
        )}
      </p>
    )


    if (movies.length == 0) { // SCUFFED SOLUTION: Prevents the page from crashing due to attempt to access movies[0] before it has loades 
      return (<p>loading...</p> )
    } else {
      return (
        <div className="App">
          <p>MAIN PAGE</p>
          <p>
            {movies[0].name}
          </p>
        </div>
      )
    }

}

export default App
