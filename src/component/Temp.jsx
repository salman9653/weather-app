import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';

const Temp = () => {
    const api_key = "89594c44132fba6bc4d4697545bb9efd"
    const [searchCity, setSearchCity] = useState("delhi");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${api_key}`;
            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys
            const myWeatherInfo = { temp, humidity, pressure, weatherMood, name, speed, country, sunset };

            setTempInfo(myWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeatherInfo();
    }, [])
    return (
        <>
            <div className='wrap'>
                <div className="search">
                    <input
                        type="search"
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={searchCity}
                        onChange={(e) => { setSearchCity(e.target.value) }}
                        placeholder='search...'
                    />
                    <button className="searchButton" onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            <WeatherCard info={tempInfo} />
        </>
    )
}

export default Temp
