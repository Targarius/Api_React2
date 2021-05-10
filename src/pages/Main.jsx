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
            setCountries(c => Object.entries(result));
            setLoaded(true);
        })
    }, []); 

    const setOrder = () => {
        // let countriesCopy = countries;
        // countriesCopy = countriesCopy.reverse();
        // setCountries(countriesCopy);
    }

    return (
        <div className="full_page">
            <div className="title">
                <h1>Flags of the world</h1>
            </div>
            <div className="filter_container">
                <input type="text" className="search_bar"/>
                <div className="radio_btn_wrapper">
                    <label htmlFor="Z-A">Reverse Order:</label>
                    <input type="checkbox" name="Z-A" value="Z-A" onChange={setOrder()}/> 
                </div>
                <div className="flag_number_wrapper">
                    <select name="" id="">
                        <option value="50">
                            50
                        </option>
                        <option value="100">
                            100
                        </option>
                        <option value="200">
                            200
                        </option>
                        <option value="all">
                            All
                        </option>
                    </select>
                </div>
            </div>
            <div className="flag_card_container">
                {loaded ? 
                    (countries.map( el => {
                        return <FlagCard attribut={el} key={countries.indexOf(el)}/>
                    }))
                : (<h2 className="loading">Loading</h2>)
                }
            </div>
        </div>
    );
};

export default Main;