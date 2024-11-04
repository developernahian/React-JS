import { useState } from 'react'



function App() {

  const [list, setList] = useState([])
  const [item, setItem] = useState('')

  const AddToList = () => {
    list.push(item)
    setList([...list])
    
  }

  const RemoveFromList= (index) => {
    list.splice(index,1)
    setList([...list])
  }

  return (
    <>
      <p>{item}</p>
      <h1>{list.length}</h1>



      <table>
        <tbody>
          {
            list.length !== 0 ? 
            (
              list.map((element,index)=>{
                return(
                  <tr key={index.toString()}>
                    <td>{element}</td>
                    <td><button onClick={()=>{RemoveFromList(index)}}>Remove</button></td>
                  </tr>
                )

              })
            ) : (<tr>  </tr>)
          }
        </tbody>
      </table>

      
      <input onChange={(e) =>setItem(e.target.value)} type="text" placeholder='Enter your todo'></input>
      <button onClick={()=>AddToList()}>Add</button>

    </>
  )
}

export default App
