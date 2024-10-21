// Todo({task})  {task} eta destrucuring
// export default function Todo({task, isDone}){
//     return (

//             <li>Task: {task}</li>
//     )
// }


//Conditional Rendering 1
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>work one: {task}</li>
//     }

// }
//OR OR same but shortcut.... almost same bola  jai



//Conditional Rendering 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>work one: {task}</li>

// }
//OR OR same but shortcut.... almost same bola  jai


//Conditional Rendering 3 (ternary)
export default function Todo({task, isDone}){
    
    return (
        <li> {isDone ? "Finished: " : "work one: "} : {task}</li>
    )

}



//Conditional Rendering 4 (&&)  ekhane only true hole left side kaz korbe
// export default function Todo({task, isDone}){
    
//     return (
//         <li> {task} {isDone && ': Done'} </li>
//     )

// }


//Conditional Rendering 5 (||)  ekhane only true hole right side kaz korbe
// export default function Todo({task, isDone}){
    
//     return (
//         <li> {task} {isDone || ': work one'} </li>
//     )

// }


// Conditional Rendering 6
// export default function Todo({task, isDone}){

//     let listItem = <li> {task}</li>

//     if(isDone){
//         listItem = <li>Finished: {task}</li>
//     }
//     else{
//         listItem = <li>work one: {task}</li>
//     }
//     return listItem

// }