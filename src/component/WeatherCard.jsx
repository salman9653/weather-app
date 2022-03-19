import React, { useEffect, useState } from 'react'

const WeatherCard = ({ info }) => {

    let date = new Date(info.sunset * 1000);
    let time = `${date.getHours()}:${date.getMinutes()}`
    return (
        <section className="widget">
            <div className="weatherIcon">
                <img src={`http://openweathermap.org/img/wn/${info.icon}@4x.png`} />
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
