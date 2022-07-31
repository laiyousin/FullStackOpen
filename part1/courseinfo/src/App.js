const Part = ({part}) => {
  return (
    <>
      <h3>{part.name} {part.exercises}</h3>
    </>
  )
}

const Content = ({part}) => {
  return (
    <>
      <Part part= {part} />
    </>
  )
}

const Course = ({course}) => {
  
  // reduce 
  // s: previous value, p: current value
  // , 0: initial value
  const sum = course.parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)

  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map(part => 
        <Content key= {part.id} part= {part} />
      )}
      <h3>total of {sum} exercises</h3>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App