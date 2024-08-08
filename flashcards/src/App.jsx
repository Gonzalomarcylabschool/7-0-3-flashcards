import './App.css'
import { useState, useEffect } from 'react'
import Flashcard from './Flashcard'
import fetchData from './utils/fetchData'
// Check out the helper function ^


function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await fetchData('http://localhost:4000/flashcards');
      if (data) setFlashcards(data);
      if (error) setError(error);
    };
    doFetch();
  }, []); // run the effect only once

  // Conditionally render the error message 
  if (error) return <p>{error.message}. Refresh to try again.</p>

  return (
    <>
      <h1>Flash Cards</h1>
      <ul>
        {
          flashcards.map((flashcard) => <Flashcard key={flashcard.id} flashcard={flashcard} />)
        }
      </ul>
    </>
  )
}

export default App