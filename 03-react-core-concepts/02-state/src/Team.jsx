import { useState } from "react"


export default function Team(){


    const [team, setTeam] = useState(11)

    const handleAdd = () => {
        // team = team +1 Wrong. soraSori change kora jaina. Imutable. setTeam er functin re call kore tar parameter update korte hobe.. like below
        const newTeam = team + 1
        setTeam(newTeam)
    }

    const handleRemove = () => {
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid red',
        boorderRadius: '15px',
        padding: '15px',
        marginTop: '50px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>

            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
            <br/>

            {/* OR */}

            <button onClick={() => setTeam(team + 1)}>Add</button>
            <button onClick={() => setTeam(team - 1)}>Remove</button>
            
        </div>
    )
}


// Hooks all time component er upore declear korte hoy