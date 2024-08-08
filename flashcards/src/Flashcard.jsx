import { useState } from 'react'

const Flashcard = ({ flashcard }) => {
  const [text, setText] = useState(flashcard.question)
  const [backgroundColor, setBackgroundColor] = useState('lightblue')

  const flipCard = () => {
    if (text === flashcard.question) { // show the answer
      setText(flashcard.answer);
      setBackgroundColor('lightgreen');
    } else {
      setText(flashcard.question); // show the question
      setBackgroundColor('lightblue');
    }
  }

  // set the style dynamically using the backgroundColor state
  const style = { background: backgroundColor }

  return (
    <li className="card" onClick={flipCard} style={style}>
      <p>{text}</p>
    </li>
  )
}