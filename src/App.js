import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import Error from "./Error";
import "./Style/display.css";
import "./Style/background.css";
import "./Style/container.css";
import axios from "axios";
import ImagesRain from "./Images/rain.png";
import ImagesWind from "./Images/wind.png";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>;

function App() {
  const [tempo, setTempo] = useState("");
  const [description, setDescription] = useState("");
  const inputEl = useRef(null);
  const background = useRef("");
  const key = "8d5f1a8a6089e5aa8ab64b6371843fc9";

  const getApi = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputEl.current.value.trim()}&appid=${key}&lang=pt_br&units=metric`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setTempo(response.data);
        setDescription(response.data.weather[0].description);
      })
      .catch((err) => {
        toast.warn(`Cidade não encontrada!`);
      });
  };

  const infoTemp = (e) => {
    e.preventDefault();
    getApi();
    inputEl.current.focus();
    inputEl.current.value = "";
  };

  useEffect(() => {
    const handleBack = () => {
      if (description !== "")
        background.current.className = `${description} new-main`;
    };
    handleBack();
  }, [description, tempo]);

  const form = (
    <div>
      <form onSubmit={infoTemp}>
        <input type="text" ref={inputEl} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );

  return (
    <div ref={background} className="main">
      <Error />
      <div className="app">
        {form}

        {tempo && (
          <div className="informations">
            <div className="name">
              <h1>{tempo.name}</h1>
              <span className="divisoriaUm"></span>
            </div>

            <p className="temperatura">
              Temperatura: {Math.floor(tempo.main.temp)} °C
            </p>

            <div className="max-min">
              <p> Máx: {Math.floor(tempo.main.temp_max)} °C</p>
              <p> Mín: {Math.floor(tempo.main.temp_min)} °C</p>
            </div>
            <div className="description">
              <p>
                {tempo.weather[0].description}{" "}
                <img
                  src={`https://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`}
                  alt=""
                />
              </p>
            </div>
            <div className="wind-rain">
              <p className="rain">
                <img src={ImagesRain} alt="humidade" />
                {tempo.main.humidity} %
              </p>
              <span></span>
              <p className="wind">
                <img src={ImagesWind} alt="vento" />
                {tempo.wind.speed} Km/h
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
