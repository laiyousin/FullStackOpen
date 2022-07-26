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
  return (
    <>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
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
      <Total exercises1= {part[0].exercises} exercises2= {part[1].exercises} exercises3= {part[2].exercises} />
    </div>
  )
}

export default App
