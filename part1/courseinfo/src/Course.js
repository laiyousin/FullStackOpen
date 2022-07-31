const Part = ({part}) => {
  return (
    <>
      <p>{part.name} {part.exercises}</p>
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
  
  const sum = course.parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)

  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map(part => 
        <Content key= {part.id} part= {part} />
      )}
      <b>total of {sum} exercises</b>
    </>
  )
}

export default Course
  