import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" placeholder="Введите город" name="city"></input>
        <button>Информация о погоде</button>
    </form>
)

export default Form