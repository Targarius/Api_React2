import React, { useState, useEffect } from 'react';
import FlagCard from "../components/FlagCard";

const Main = () => {
    const [countries, setCountries] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://flagcdn.com/en/codes.json')
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setCountries(c => result);
            setLoaded(true);
        })
    }, []); 

    // for (const [key, value] of Object.entries(countries){}
    //SWAP OBJECT TO ARRAY, ARRAY MAP => FlagCard

    return (
        <div>
          {loaded ? 
            ("Loaded")
           : (<h2 className="loading">Loading</h2>)
          }
        </div>
    );
};

export default Main;