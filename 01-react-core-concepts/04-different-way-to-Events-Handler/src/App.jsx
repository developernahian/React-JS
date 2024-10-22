import './App.css'

function App() {

  //normal function (btn 1)
  function handleClick(){
    alert('Button Clicked')
  }

  //arrow function   (btn 2)
  const handleClick2 = () =>{
    alert('Button Clicked 2')
  }

  //arrow function with parameter pass. je parameter pass korbo tar sathe 50 plus kore alert dekhabe (btn 4)
  const addToFive = (num) => {
    alert(num + 50)
  }

  return (
    <>

      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click Me 2</button>

      {/* btn 3 */}
      <button onClick={() => alert('Button Clicked 3')}>Click Me 3</button>


      {/* <button onClick={addToFive(7)}>Click Me 4</button> // eta worng way, evage korle page reload er sathe auto function call hoye alert dekhabe.. so arrow function use korte hobe like "Click Me 4"  */}
      <button onClick={() => addToFive(7)}>Click Me 4</button>

    </>
  )
}

export default App
