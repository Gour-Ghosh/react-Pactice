// import './App.css'

export default function App() {
  let person = {
    name: 'Jhon',
    age: 40,
    sex: 'Male',
  }

  return (
    <main>
      <h2>Object List</h2>
      <table border={1} width={600}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Sex</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.sex}</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}