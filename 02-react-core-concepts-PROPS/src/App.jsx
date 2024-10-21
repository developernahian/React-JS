
import './App.css'
import Todo from './Todo'
// './Todo.jsx' or './Todo' which is best practice?
// no need to use extension here. extension use korleo kono problem nai. but na use kora recommended
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'



function App() {
  
  const actorsss = ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo',]

  const singers = [
    { id: 1, name: 'Ana Maria', age: 34 },
    { id: 2, name: 'Tailor Swift', age: 33 },
    { id: 3, name: 'Otilia', age: 32 },
  ]


  const books = [
    { id: 1, name: 'physics', price: 300 },
    { id: 2, name: 'Math', price: 500 },
    { id: 3, name: 'Chemistry', price: 230  },
    { id: 4, name: 'biology', price: 200 },
  ]




  return (
    <>

      <h1>Vite + React</h1>

      <Device name='laptop' price="2000"></Device>
      <Device name="mobile" price="1000"></Device>


      <br/>
      <br/>
      <hr/>
      <h4>-----------------Student----------------</h4>


      <Student grade="7" score="95"></Student>
      <Student grade="9" score="80"></Student>

      
      <br/>
      <br/>
      <hr/>
      <h4>-----------------Grammer----------------</h4>

      
      <Gammer name="John" rank="105"></Gammer>
      {/*OR OR OR OR OR we can use dynamic value here */}
      <Gammer name={"John"} rank={105}></Gammer>
      {/* value na dite chaile default value use kra jai */}
      <Gammer></Gammer>
      <Gammer rank='60'></Gammer>



      <br/>
      <br/>
      <hr/>
      <h4>-----------------Todo.jsx----------------</h4>
      
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn Node" isDone={false}></Todo>
      <Todo task="Learn JSX" isDone={true}></Todo>
      <Todo task="Learn Next.js" isDone={false}></Todo>



      <br/>
      <br/>
      <hr/>
      <h4>-----------------Actor.jsx----------------</h4>
      <Actor name="abc"></Actor>
      {
        actorsss.map(actorrr => <Actor name={actorrr}></Actor>)
      }



      <br/>
      <br/>
      <hr/>
      <h4>-----------------Singer.jsx----------------</h4>
      {/* <Singer name="xyz"></Singer> */}
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }




      <br/>
      <br/>
      <hr/>
      <h4>-----------------BookStore.jsx + Book.jsx----------------</h4>
      <BookStore books={books}></BookStore>
      {/* //props and props value */}
      


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
