import React, {useState} from "react";
import './Weather.css';
import axios from 'axios';

const Weather = () => {

    const [data, setData] = useState({});
    const [city, setCity] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c253932763db2d92540decf50cf2e61&units=imperial`

    const search = () => {
        axios.get(url).then((response) => {
            setData(response.data)
        })
    }

    const handleLocation = (event) => {
        setCity(event.target.value)
    }

    const searchLocation = () => {
        search(city);
        setCity('');
    }

    return (
        <div className="weather">
            <h1>Check the Weather</h1>
            <div className="search">
                <input type='text' placeholder='Enter City' value={city} onChange={handleLocation}/>
                <button onClick={searchLocation}>Search</button>
            </div>
                    <p id="city-name">{data.name}</p>
                    {data.weather ? <h2 id='main'>{data.weather[0].main}</h2> : null}
                    {data.main ? <h1 id="temperature">{data.main.temp.toFixed()}°F</h1> : null}
                    {data.main ? <p id="hi-low">Low: {data.main.temp_min.toFixed()}°F Hi: {data.main.temp_max.toFixed()}°F</p> : null}

                    {data.name !== undefined &&
                <div className="humidity-wind">
                    {data.main ? <p>Feels like {data.main.feels_like.toFixed()} °F</p> : null}
                    {data.main ? <p>Humidity {data.main.humidity}%</p> : null}
                    {data.wind ? <p> Wind Speed {data.wind.speed} mph</p> : null}
                </div>
                }
        </div>
    )
}

export default Weather;