import './App.css'

function App() {
  

  return (
    <> 

      <h1>Vite + React</h1>

      <Person></Person>
      <Person></Person>
      <Person></Person>

      <Student></Student>

      <Developer></Developer>

      <Skill></Skill>



    </>
  )
}



function Person(){
  const age = 100;
  const money = 20;
  const personnn = {name: 'John', address: 'USA'}
  return <h3>I am {personnn.name} with age: {age} with money: {money+1}</h3>
  
}

function Student(){
  //() use na korle return er line e div likhte hobe, return er niche div likhle must () sue korte hobe
  // return <div>
  //   <h3>I am a student</h3>
  //   <p>Name: Jack</p>
  // </div>
  //OR

  return (
    <div className='student'>
      <h3>I am a student</h3>
      <p>Name: Jack</p>
    </div>
  )
}



document.getElementById('root')
function Developer(){

  //developerStyle is a Object... object style hisebe use kora jai
  const developerStyle = {
    border: '2px solid purple',
    borderRadius: '30px',
    margin: '20px',
    padding: '20px'
  }

  return (
    // dynamic style
    <div style={developerStyle}>
      <h3>I am developer</h3>
      <p>Name: John</p>
    </div>
  )
}

function Skill(){

  // full object tai style er moddhe lekha jai dynamic vabe
  return (
    <div style={
      {
    border: '2px solid blue',
    borderRadius: '50px',
    margin: '20px',
    padding: '20px'
  }
    }>
      <h3>Skill</h3>
      <p>JavaScript, React</p>
    </div>
  )
  
}

export default App




// <> </> empty tag ba Fragment reture
// <div></div> div return 


//self closing tags like <img> must become <img />
//wrapping tags like <li> must become <li></li>

//class -> className
//onclick -> onClick
//tabindex -> tabIndex

//ekhane jsx code likhchi.. jeta html er moto dekhete but eta jsx
