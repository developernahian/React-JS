
import './App.css'


function App() {
  

  return (
    <>

      <h1>Vite + React</h1>

      <Device name='laptop' price="2000"></Device>
      <Device name="mobile" price="1000"></Device>




      <Student grade="7" score="95"></Student>
      <Student grade="9" score="80"></Student>

      

      
      <Gammer name="John" rank="105"></Gammer>
      {/*OR OR OR OR OR we can use dynamic value here */}
      <Gammer name={"John"} rank={105}></Gammer>
      {/* value na dite chaile default value use kra jai */}
      <Gammer></Gammer>
      <Gammer rank='60'></Gammer>


    </>
  )
}


//props is short form of properties
//Evabe use korbo na NOT recommanded
function Device(props){
  return <h2>This device: {props.name} with price: {props.price}</h2>
}


//auto Distructuring
// evabe use korbo recommended
function Student({grade, score}){
  console.log(grade, score)
  return (
    <div className="commonBorder">
      <h3>This is Student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
      </div>
  )

}


function Gammer({name='UUunknown', rank='0'}){
  return(
    <div className="commonBorder">
      <h3>This is Gammer</h3>
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
    </div>
  )

}

export default App


// Props is only read onle
