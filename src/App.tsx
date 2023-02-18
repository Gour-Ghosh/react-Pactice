// import './App.css'

export default function App() {
  let name: any = 'Arif';
  let num: Number = 1234;
  return (
    <main>
      {name} {num}
      <div><input type="text" placeholder={name} /></div>
    </main>
  )
}