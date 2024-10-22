import { useState } from "react"

export default function Counter() {

    // const abc = useState(30)
    // console.log(abc)

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1
        setCount(newCount)
        //OR
        //setCount(count + 1)
    }

    const handleReduce = () => {
        /* const newCount = count - 1
        setCount(newCount) */
        //OR
        setCount(count - 1)
    }

    return (
        <div style={{border: '2px solid yellow', padding: '100px',}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>

        </div>
    )
}




// Hooks all time component er upore declear korte hoy