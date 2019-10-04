import React from 'react';

const Weather = props => (
    <div>
        {props.temp && 
            <div>
            <p>Город - {props.name}</p>
            <p>Температура - {props.temp}</p>      
            </div>
        }
        <p>{props.error}</p>
    </div>
)


export default Weather