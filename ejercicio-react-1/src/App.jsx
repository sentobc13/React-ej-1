import './App.css'
import Person from './components/Person/Person.jsx'

function App() {
const name = 'Sento'
  return (
    <div>
      <Person name={name} surname={'Berlanga'} age={24}/>
      <Person name='Yoli' surname='López' age={28}/>
      <Person name={'Pablo'} surname={'García'} age={30}/>
    </div>

  )
}

export default App
