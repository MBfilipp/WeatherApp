import React from 'react';

const Weather = props => (
    
    <div className="container">
        <div className="row">
            {props.temp && 
                <div className="list-group col-sm">
                    <ul class="list-group">
                        <li class="list-group-item disabled">{props.name}</li>
                        <li class="list-group-item">Температура °К- {props.temp}</li>
                        <li class="list-group-item">Температура °С- {Math.round(props.temp - 273.15)}</li>
                    </ul>
                </div>        
            }
            <p>{props.error}</p>
        </div> 
    </div>
)


export default Weather