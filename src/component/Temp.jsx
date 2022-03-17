import React from 'react'

const Temp = () => {
    return (
        <>
            <div className='wrap'>
                <div className="search">
                    <input
                        type="search"
                        autoFocus
                        id='search'
                        className='searchTerm'
                        placeholder='search...'
                    />
                    <button className="searchButton">Search</button>
                </div>
            </div>
            <section className="widget">
                <div className="weatherIcon">
                    <i className={'wi wi-day-sunny'}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>25 &deg;</span>
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
