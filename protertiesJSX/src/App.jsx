import Student from './Students.jsx'

function App() {
  return(
    <>
      {/* Student component with props */}
      <Student
        name="Spongebob" 
        age={30} 
        isStudent={true}
      />
      <br/>
      {/* Student component with props */}
      <Student
        name="Patrick" 
        age={42} 
        isStudent={false}
      />
      <br/>
      {/* Student component with props */}
      <Student
        name="Squidward" 
        age={50} 
        isStudent={false}
      />
      <br/>
      {/* Student component with props */}
      <Student
        name="Sandy" 
        age={27} 
        isStudent={true}
      />
      <br/>
      {/* Student component without props */}
      <Student />
    </>
  )
}
export default App
