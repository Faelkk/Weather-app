import { useEffect, useState } from "react";

function useLocationCurrent(inputValue: string) {
  const apiKeyCurrent = "17afd8ed31e14b1abf4160832231807";

  const [currentWeather, setCurrentWeather] = useState([]);
  const [loadingCurrent, setLoadingCurrent] = useState(false);
  const [errorCurrent, setErrorCurrent] = useState(false);

  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKeyCurrent}&q=${inputValue}`;

    const fetchCurrent = async () => {
      try {
        setErrorCurrent(false);
        setLoadingCurrent(true);
        if (inputValue !== "") {
          const response = await fetch(url);

          if (response.ok) {
            const result = await response.json();
            setCurrentWeather(result);
          } else {
            throw new Error("Error ao achar a sua cidade");
          }
        }
      } catch (error) {
        setErrorCurrent(true);
      } finally {
        setLoadingCurrent(false);
      }
    };
    fetchCurrent();
  }, [inputValue]);

  return [currentWeather, loadingCurrent, errorCurrent];
}

export default useLocationCurrent;

export function useForeCastLocation(inputValue: string) {
  const apiKeyForeCast = "17afd8ed31e14b1abf4160832231807";
  const [forecastWeather, setforecastWeather] = useState([[""]]);
  const [loadingforecast, setLoadingforecast] = useState(false);
  const [errorforecast, setErrorforecast] = useState(false);
  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKeyForeCast}&q=${inputValue}&days=7`;

    const fetchForecast = async () => {
      try {
        setErrorforecast(false);
        setLoadingforecast(true);

        if (inputValue.length) {
          const response = await fetch(url);
          if (response.ok) {
            const result = await response.json();

            setforecastWeather(result);
          } else {
            throw new Error("Error ao achar a sua cidade");
          }
        }
      } catch (error) {
        setErrorforecast(true);
      } finally {
        setLoadingforecast(false);
      }
    };
    fetchForecast();
  }, [inputValue]);

  return [forecastWeather, loadingforecast, errorforecast];
}
