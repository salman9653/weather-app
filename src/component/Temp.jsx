import React, { useEffect, useState } from 'react'

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
            <section className="widget">
                <div className="weatherIcon">
                    <i className={'wi wi-day-sunny'}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span> &deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            sunny
                        </div>
                        <div className="place">
                            Delhi, In
                        </div>
                    </div>
                </div>
                <div className="date">
                    {new Date().toLocaleString()}
                </div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">
                                19:19 <br /> Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">
                                42% <br /> Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className="extra-info-leftside">
                                19:19 <br /> Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">
                                42% <br /> Speed
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Temp
