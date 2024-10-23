import { useState } from 'react';

import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    // console.log(country)
    const {name, flags, population, area,cca3} = country

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        // setVisited(true)
        setVisited(!visited)
    }


    // console.log(handleVisitedCountry)

    // const passWithParams = () => {
    //     handleVisitedCountry(country)
    // }


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'green' : 'tomato'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt="flag img" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>


           
            <button onClick={() => handleVisitedCountry(country.name.common)}>Mark visited</button>
            <br/>


            
            {/* <button onClick={handleVisited}>Visited</button> */}
            {/* {visited && 'I have visited this country'} */}

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Want to visit'}</button>
            {visited ? 'I have visited this country': 'I want to visit this country'}
        </div>
    );
};

export default Country;