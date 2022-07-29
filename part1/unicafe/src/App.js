import { useState } from "react"

const Title = (props) => {
  return (
    <>
      <h1>
        {props.title}
      </h1>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick= {props.handleclick}>{props.text}</button>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td> 
    </tr>
  )
}
const Statistics = (props) => {
  const sum = props.score[0].number + props.score[1].number + props.score[2].number
  if( sum <= 0) {
    return (
      <>
        <h3>No feedback given</h3>
      </>
    )
  }
  else {
    return (
      <>
        <table>
          <StatisticLine text= {props.score[0].name} value= {props.score[0].number} />
          <StatisticLine text= {props.score[1].name} value= {props.score[1].number} />
          <StatisticLine text= {props.score[2].name} value= {props.score[2].number} />
          <StatisticLine text= 'all' value= {sum} />
          <StatisticLine text= 'average' value= {(props.score[0].number - props.score[2].number)/sum} />
          <StatisticLine text= 'positive' value= {props.score[0].number/sum + ' %'} />
        </table>
      </>
    )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const score = [
    {
      name: 'good',
      number: good
    },
    {
      name: 'neutral',
      number: neutral
    },
    {
      name: 'bad',
      number: bad
    }
  ]
  const handlegoodclick = () => {
    setGood(pregood => pregood + 1)
  }

  const handleneutralclick = () => {
    setNeutral(preneutral => preneutral + 1)
  }

  const handlegbadclick = () => {
    setBad(prebad => prebad + 1)
  }

  return (
    <div>
      <Title title='give feedback' />
      <Button text= 'good' handleclick= {handlegoodclick} />
      <Button text= 'neutral' handleclick= {handleneutralclick} />
      <Button text= 'bad' handleclick= {handlegbadclick} />
      <Title title='statics' />
      <Statistics score= {score}/>
    </div>
  )
}

export default App
