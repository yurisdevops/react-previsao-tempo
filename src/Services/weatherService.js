import axios from "axios";

export const fetchWeatherData = async (city, key) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${key}&lang=pt_br&units=metric`;
  try {
    const response = await axios.get(url);
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw new Error("Cidade não encontrada!");
  }
};
