import './Person.css'

const Person = (props) => {
  return <span className='text-person'> Hola, soy {props.name} {props.surname} y tengo {props.age} años <br/></span>
}

export default Person