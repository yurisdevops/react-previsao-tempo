import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import Error from "./Error";
import "./Style/display.css";
import "./Style/background.css";
import "./Style/container.css";
import ImagesRain from "./Images/rain.png";
import ImagesWind from "./Images/wind.png";
import { fetchWeatherData } from "./Services/weatherService";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>;

function App() {
  const [weatherData, setWeatherData] = useState({
    name: "",
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humidity: 0,
    },
    weather: [{ description: "", icon: "" }],
    wind: { speed: 0 },
  });
  const [description, setDescription] = useState("");
  const inputEl = useRef(null);
  const background = useRef("");
  const key = "8d5f1a8a6089e5aa8ab64b6371843fc9";

  const handleWeatherSearch = async (e) => {
    e.preventDefault();

    const city = inputEl.current.value;

    if (!city) {
      toast.warn("Por favor, insira o nome de uma cidade.");
      return;
    }

    try {
      const response = await fetchWeatherData(city, key);
      if (response) {
        setWeatherData(response);
        setDescription(response.weather[0].description);
      }
      inputEl.current.value = "";
      inputEl.current.focus();
    } catch (error) {
      toast.warn("Cidade não encontrada!");
      console.error("Erro ao buscar dados do clima:", error);
    }
  };

  console.log(description)

  useEffect(() => {
    if (description && background.current) {
      background.current.className = `${description} new-main`;
    }
  }, [description]);

  return (
    <div ref={background} className="main">
      <Error />
      <div className="app">
        <div>
          <form onSubmit={handleWeatherSearch}>
            <input type="text" ref={inputEl} />
            <input type="submit" value="Buscar" />
          </form>
        </div>

        {weatherData.name && (
          <div className="informations">
            <div className="name">
              <h1>{weatherData.name}</h1>
              <span className="divisoriaUm"></span>
            </div>

            <p className="temperatura">
              Temperatura: {Math.floor(weatherData.main.temp)} °C
            </p>

            <div className="max-min">
              <p>Máx: {Math.floor(weatherData.main.temp_max)} °C</p>
              <p>Mín: {Math.floor(weatherData.main.temp_min)} °C</p>
            </div>

            <div className="description">
              <p>
                {weatherData.weather[0].description}
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  alt=""
                />
              </p>
            </div>

            <div className="wind-rain">
              <p className="rain">
                <img src={ImagesRain} alt="humidade" />
                {weatherData.main.humidity} %
              </p>
              <span></span>
              <p className="wind">
                <img src={ImagesWind} alt="vento" />
                {weatherData.wind.speed} Km/h
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
