import React, { useEffect, useState } from 'react'

const WeatherCard = ({ info }) => {
    const [weatherState, setWeatherState] = useState("");
    useEffect(() => {
        switch (info.weatherMood) {
            case "Clouds":
                setWeatherState("wi-day-cloudy");
                break;
            case "Haze":
                setWeatherState("wi-day-haze");
                break;
            case "Rain":
                setWeatherState("wi-day-rain");
                break;
            case "Thunderstorm":
                setWeatherState("wi-day-thunderstorm");
                break;
            case "Snow":
                setWeatherState("wi-day-snow");
                break;
            case "Clear":
                setWeatherState("wi-day-sunny");
                break;
            case "Fog":
                setWeatherState("wi-day-fog");
                break;
            case "Mist":
                setWeatherState("wi-day-fog");
                break;
            default:
                setWeatherState("wi-day-sunny");
        }

    }, [info.weatherMood])

    let date = new Date(info.sunset * 1000);
    let time = `${date.getHours()}:${date.getMinutes()}`
    return (
        <section className="widget">
            <div className="weatherIcon">
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span> {info.temp}&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">
                        {info.weatherMood}
                    </div>
                    <div className="place">
                        {info.name}, {info.country}
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
                            Sunset <br /> {time}
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className="extra-info-leftside">
                            Humidity <br /> {info.humidity}
                        </p>
                    </div>
                </div>
                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className="extra-info-leftside">
                            Pressure <br /> {info.pressure}
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className="extra-info-leftside">
                            Speed <br />{info.speed}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeatherCard
