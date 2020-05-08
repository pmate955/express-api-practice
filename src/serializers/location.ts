import { Weather } from "../models/weather";

interface WeatherResponse {
  weather_state_name: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  wind_speed: number;
}

export const show = (weatherPrediction: WeatherResponse): Weather => {
  let out: Weather = {
    date: weatherPrediction.applicable_date,
    windSpeed: weatherPrediction.wind_speed,
    maxTemp: weatherPrediction.max_temp,
    minTemp: weatherPrediction.min_temp,
    weather: weatherPrediction.weather_state_name
  };
  return out;
};