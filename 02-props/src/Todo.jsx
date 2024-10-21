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
export default function Todo({task, isDone}){
    if(isDone){
        return <li>Finished: {task}</li>
    }
    return <li>work one: {task}</li>

}
