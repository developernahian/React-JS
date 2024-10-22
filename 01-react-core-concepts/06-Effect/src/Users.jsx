import { useEffect, useState } from "react"

export default function Users() {


        //useState([]) ekhane () er moddhe [] use korar karon  kono data na pele default value hisebe emply array thakbe. keno []? karon api ta array... for this reason {friends.length} value is 0
    const [users, setUsers] =  useState([])

    // useEffect(()=>{},[])
    //callback function ()=>{} , dependency array []
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setUsers(data))
    },[])

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

/*
* 1. declare a state to hold the data
* 2. useEffect with call back and dependency
* 3. use fetch to load data
* 4. set loaded data to the state
*
*
*
*
*
*
*
*
*/