import './App.css'

function ListElements({title, elements}){

  function EscribirElemento ( element ) {
      return (
          <tr className={element.stock === true ? "negrita" : "element"}>
           <td> <b>{element.name}</b> </td>
          <td> <b>{element.price}</b> </td>
          </tr>
      )
  }

  return (
    <>
      <h2 className="subtitle"> {title} </h2>
      <tr>
        {elements.map( (element) => {
          return (
          <div> {element.name} </div>
          )
        })}
      </tr>
    </>
  )
  
}

const frutas = [
  {
    name: 'manzana',
    price: '$2',
    stock: true
  },
  {
    name: 'naranja',
    price: '$6',
    stock: false
  },
  {
    name: 'banana',
    price: '$8',
    stock: false
  },
]

frutas.push({
  name: 'naranjo',
  price: '$24',
  stock: true
})


const verduras = [
  {
    name: 'zapallo',
    price: '$12'
  },
  {
    name: 'papa',
    price: '$1'
  },
  {
    name: 'zanahoria',
    price: '$2'
  }
]

export default function App() {
  return <>
    <form>
    <label htmlFor="buscador"> Buscador </label>
     <input id='buscador' type='text' />
     <label htmlFor='mostrarProductos'> Solo mostrar productos en stock </label>
     <input id='mostrarProductos' type='checkbox'/>
    </form>
    <table>
      <tr>
      <td className="Title"> Nombre </td>
      <td className="Title"> Precio </td>
      </tr>
      <ListElements title='Fruits' elements={frutas}/>
      <ListElements title='Verduras' elements={verduras}/>

    </table>
    </>   
}