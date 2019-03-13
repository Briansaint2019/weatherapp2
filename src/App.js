import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a137feeba3863374b89473db92b1b08a";

class App extends React.Component {
  state = {
    temperature: undefined,
    high:undefined,
    low:undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    let daily = data.list
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&cnt5&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.list[0].main.temp,
        high: data.list[0].main.temp_max,
        low:data.list[0].main.temp_min,
        city: data.city.name,
        country: data.city.country,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather.description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        high:undefined,
        low:undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
    console.log(data);
}
  
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                   
                    temperature={this.state.temperature}
                    high={this.state.high}
                    low={this.state.low} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;