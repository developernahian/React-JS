
import './App.css'
import Counter from './Counter'
import Team from './Team'
function App() {


  return (
    <>

      <Counter> </Counter>
      <Team></Team>

    </>
  )
}

export default App



/*

const {name, age} = {name: 'John', age: 30}




const [first, second] = [1,2]





function getSomething(){
  return [1,2]
}
const [a,b] = getSomething()




function useState(num){
  function updateNum(value){
    num = value;
    return [num, updateNum]
  }
}
const [num, updateNum] = useState(10)




*/