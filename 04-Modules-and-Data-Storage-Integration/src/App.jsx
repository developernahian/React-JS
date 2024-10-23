import { useEffect, useState } from 'react'
import './App.css'
import Sunglass from './components/Sunglass/Sunglass'
import Watch from './components/Watch/Watch'


function App() {

  //watches er state declear
  const [watches, setWatches] = useState([])


  // useEffect( () =>{}, [])
  //watches.json file ta public folder er moddhe ache. eta public folder e rakhte hoy
  // useEffect( () =>{
  //   fetch('watches.json')
  //   .then(res=> res.json())
  //   .then(data => setWatches(data))
  // }, [])
  
//NOTE: code korar somoy json data te kono chenge korle website auto update hoyna. dont worry page reload dilei update show korbe



//github e public repo to json upload kore then raw data link create api
useEffect( () =>{
  fetch('https://raw.githubusercontent.com/developernahian/5watches-data/refs/heads/main/watches.json')
  .then(res=> res.json())
  .then(data => setWatches(data))
}, [])
//github e kichu public api ache, link : https://github.com/public-apis/public-apis eta popular akta api er repo







  //(ChatGPT Prompt) Give me 5 smart watch array of object format data and I need just the id, name and price
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 9",
  //     price: 399
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 6",
  //     price: 349
  //   },
  //   {
  //     id: 3,
  //     name: "Garmin Venu 3",
  //     price: 299
  //   },
  //   {
  //     id: 4,
  //     name: "Fitbit Sense 2",
  //     price: 229
  //   },
  //   {
  //     id: 5,
  //     name: "Amazfit GTR 4",
  //     price: 199
  //   }
  // ];
  

  return (
    <>
      
      <Sunglass> </Sunglass>
      <hr/>
      
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }

    </>
  )
}

export default App
