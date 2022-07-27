import { useState } from "react"

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [ counter, setCounter ] = useState(0)

  //若在此使用箭頭函式，則每次觸發按鈕事件時才進入函式。
  //若在此使用普通函式，則會因為按鈕事件，改變counter，改變counter會觸發re-render，re-render時又會改變counter，以此類推造成re-render次數過多。
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button 
        onClick= {increaseByOne} 
        text= 'ADD' 
        />
      <Button
        onClick= {setToZero}
        text= 'ZERO'
      />
    </div>
  )
}

export default App
