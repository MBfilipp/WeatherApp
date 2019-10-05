import React from 'react';

const Form = props => (
    <div className="container">
        <div className="row">
            <form className="form-inline my-2" onSubmit={props.getWeather}>
                <div className="input-group mb-2 mr-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">City</span>
                    </div>
                    <input type="text" placeholder="Введите город" name="city" className="form-control"></input>
                </div>
                <button className="btn btn-primary mb-2">Информация о погоде</button>
            </form>
        </div>
    </div>
    
)

export default Form