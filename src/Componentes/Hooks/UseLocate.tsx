import { useEffect, useState } from "react";
import { WeatherCurrent } from "../../Types/Types";

function useApiLocation(inputValue: string, apiKey: string) {
  const [WeatherApi, setApiWeather] = useState<WeatherCurrent | null>(null);
  const [loadingApi, setLoadingApi] = useState(false);
  const [errorApi, setErrorApi] = useState<string | null>(null);

  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inputValue}&days=7`;

    const fetchApi = async () => {
      try {
        setErrorApi(null);

        setLoadingApi(true);

        if (inputValue.length) {
          const response = await fetch(url);
          if (response.ok) {
            const result = await response.json();
            setApiWeather(result);
          } else {
            throw new Error("Error fetching Api");
          }
        }
      } catch (error: any) {
        setErrorApi(error.message);
      } finally {
        setLoadingApi(false);
      }
    };
    fetchApi();
  }, [inputValue, apiKey]);

  return [WeatherApi, loadingApi, errorApi];
}
export default useApiLocation;
