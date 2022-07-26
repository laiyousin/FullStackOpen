const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part= {props.part[0].name} exercises= {props.part[0].exercises} />
      <Part part= {props.part[1].name} exercises= {props.part[1].exercises} />
      <Part part= {props.part[2].name} exercises= {props.part[2].exercises} />
    </>
  )
}

const Total = (props) => {
  let sum = props.part[0].exercises + props.part[1].exercises + props.part[2].exercises
  return (
    <>
      <p>
        Number of exercises {sum}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course= {course} />
      <Content part= {part} />
      <Total part= {part} />
    </div>
  )
  // 每個compoenet會回傳一個object，裡面存有不同properties，以Content為例，object中有一property：part，再根據各compoenet所需取得property的內容物。
}

export default App
