import { HeaderApp, HeaderContainer, TitleApp } from "./style";

import InputWeather from "../Helpers/Input";
import WeatherLocation from "../WeatherLocation/WeatherLocate";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderApp>
        <TitleApp>Weather-App</TitleApp>
        <InputWeather
          type="text"
          placeholder="Pesquise uma cidade"
          id="weather-input"
        />
        <WeatherLocation />
      </HeaderApp>
    </HeaderContainer>
  );
};

export default Header;
