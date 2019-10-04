import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const text = e.target.value;
        this.setState({text: text});
    }

    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" placeholder="Введите город" name="city" onChange={this.onChange} value={this.state.text}></input>
                <button>Информация о погоде</button>
            </form>
        );
      }

}