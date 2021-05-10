import React from 'react';

const FlagCard = (props) => {
    let Abv = props.attribut[0];
    let Name = props.attribut[1];
    let link = `https://en.wikipedia.org/wiki/${Name}`;
    let srcAbv = `https://flagcdn.com/w160/${Abv}.png`;

    return (
        <div className="card">
            <a href={link} target="_blank" rel="noreferrer">
                <img
                    src={srcAbv}
                    width="160"
                    height="60"
                    alt={Name} 
                />
            <h2>{Name}</h2>
           </a>
        </div>
    );
};

export default FlagCard;