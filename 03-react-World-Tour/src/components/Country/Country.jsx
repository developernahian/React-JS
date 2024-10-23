import React, { useState } from 'react';

import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags, population, area,cca3} = country

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        // setVisited(true)
        setVisited(!visited)
    }

    return (
        <div className='country'>
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="flag img" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>
            
            {/* <button onClick={handleVisited}>Visited</button> */}
            {/* {visited && 'I have visited this country'} */}
            
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Want to visit'}</button>
            {visited ? 'I have visited this country': 'I want to visit this country'}
        </div>
    );
};

export default Country;