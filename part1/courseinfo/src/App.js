const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
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
      <Part part= {props.course.part[0].name} exercises= {props.course.part[0].exercises} />
      <Part part= {props.course.part[1].name} exercises= {props.course.part[1].exercises} />
      <Part part= {props.course.part[2].name} exercises= {props.course.part[2].exercises} />
    </>
  )
}

const Total = (props) => {
  let sum = props.course.part[0].exercises + props.course.part[1].exercises + props.course.part[2].exercises
  return (
    <>
      <p>
        Number of exercises {sum}
      </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
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
  }

  return (
    <div>
      <Header course= {course} />
      <Content course= {course} />
      <Total course= {course} />
    </div>
  )
  // 每個compoenet會回傳一個object，裡面存有不同properties，以Content為例，object中有一property：part，再根據各compoenet所需取得property的內容物。
}

export default App
