import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <> 

      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>

      <Student></Student>



    </>
  )
}



function Person(){
  const age = 100;
  const money = 20;
  const person = {name: 'John', address: 'USA'}
  return <h3>I am {person.name} with age: {age} with money: {money+1}</h3>
  
}

function Student(){
  // return <div>
  //   <h3>I am a student</h3>
  //   <p>Name: Jack</p>
  // </div>
  //OR

  return (
    <div>
      <h3>I am a student</h3>
      <p>Name: Jack</p>
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
