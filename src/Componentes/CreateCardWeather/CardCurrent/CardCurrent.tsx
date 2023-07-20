import { WeatherApi } from "../../../Types/Types";
import ImageCard from "../../Helpers/Image";
import {
  AboutLocate,
  CardNow,
  ContainerInfo,
  ContainerTemp,
  SpanDescription,
  SpanLocate,
  SpanTemp,
  TitleNow,
} from "./style";

const CardCurrent: React.FC<WeatherApi> = ({ currentWeather }) => {
  if (!currentWeather) return null;
  const weatherIcon = currentWeather.current.condition.icon;
  return (
    <>
      <CardNow>
        <TitleNow>Agora</TitleNow>
        <ContainerInfo>
          <ContainerTemp>
            {" "}
            <SpanTemp>{currentWeather.current.temp_c}°C </SpanTemp>{" "}
            <ImageCard src={weatherIcon.replace("64x64", "128x128")} />
          </ContainerTemp>
          <AboutLocate>
            {" "}
            <SpanDescription>
              {currentWeather.current.condition.text}
            </SpanDescription>
            <SpanLocate>
              <span>{currentWeather.location.name}</span>{" "}
              <span style={{ textTransform: "capitalize" }}>
                {" "}
                {currentWeather.location.country}
              </span>
            </SpanLocate>{" "}
          </AboutLocate>
        </ContainerInfo>
      </CardNow>
    </>
  );
};

export default CardCurrent;
