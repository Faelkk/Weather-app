import { useState } from "react";

import InputWeather from "../Helpers/Input";
import { HeaderApp, HeaderContainer, TitleApp } from "./Style";
import CardWeather from "../CreateCardWeather/CardWeather";
import Starting from "../Helpers/Starting";

export const Weather = () => {
  const [inputvalue, setinputvalue] = useState("");

  function handleSearchValue(value: string) {
    setinputvalue(value);
  }

  return (
    <>
      <HeaderContainer>
        <HeaderApp>
          <TitleApp>Weather App</TitleApp>
          {inputvalue !== "" && (
            <InputWeather
              type="text"
              placeholder="Pesquise uma cidade"
              id="weather-input"
              required
              onSearch={handleSearchValue}
            />
          )}
        </HeaderApp>
      </HeaderContainer>
      {inputvalue !== "" ? (
        <CardWeather weather={inputvalue} />
      ) : (
        <Starting searchvalueHandle={handleSearchValue} />
      )}
    </>
  );
};

export default Weather;
