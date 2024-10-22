import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'



export default function Friends(){


    //useState([]) ekhane () er moddhe [] use korar karon  kono data na pele default value hisebe emply array thakbe. keno []? karon api ta array... for this reason {friends.length} value is 0
const [friends, setFriends] = useState([])

    // useEffect(()=>{},[])
    //callback function ()=>{} , dependency array []
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
},[])



    return (
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}


/**
 * 
 *  1.  state to hold data (state declear korbo data re hold korar jonno)
 *  2. use effect with dependency array
 *  3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
 */