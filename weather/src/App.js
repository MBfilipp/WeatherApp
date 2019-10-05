import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'ed4871498061855a167e456f730ff4ea';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      temp: undefined,
      error: undefined
    }
  }

  getInfo = async (e) => {
    e.preventDefault();

    const CITY_NAME = e.target.elements.city.value;
    const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`);
    const JSON_API_URL = await API_URL.json();

    console.log(JSON_API_URL);

    if(JSON_API_URL.name) {
      this.setState({
        name: JSON_API_URL.name,
        temp: JSON_API_URL.main.temp,
        error: undefined
      });
    }else {
      this.setState({
        name: undefined,
        temp: undefined,
        error: "Введите название города"
      });
    }
  }

  render() {
    return (
      <div>
        <Form getWeather={this.getInfo}/>
        <Weather name={this.state.name}
                 temp={this.state.temp}
                 error={this.state.error}/>
      </div>
    );
  }

}

export default App;