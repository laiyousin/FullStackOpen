import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick= {props.handleclick}>{props.text}</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVote] = useState([0, 0, 0, 0, 0, 0, 0])

  const handlevoteclick = () => {
    const points = [...voted]
    points[selected] ++
    setVote(points)
  }
  const handlenextclick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const maxindex = voted.indexOf(Math.max(...voted))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <h2>has {voted[selected]} votes</h2>
      <Button handleclick= {handlevoteclick} text= 'vote' />
      <Button handleclick= {handlenextclick} text= 'next acecdotes' />
      <h1>Anecdotes has most votes</h1>
      <h2>{anecdotes[maxindex]}</h2>
      <h2>has {voted[maxindex]} votes</h2>
    </div>
  )
}

export default App