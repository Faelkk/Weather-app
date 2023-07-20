import styled from "styled-components";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import useLocationCurrent, { useForeCastLocation } from "../Hooks/UseLocate";
import CardCurrent from "./CardCurrent/CardCurrent";
import CardForeCast from "./CardForeCast/CardForeCast";
import InformationToday from "./InformationsDay/InformationToday";
import { ContainerCurrent } from "./CardCurrent/style";
import {
  WeatherCurrent,
  WeatherForecast,
  WeatherType,
} from "../../Types/Types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWeather = ({ weather }: WeatherType) => {
  const [currentWeather, loadingCurrent, errorCurrent] =
    useLocationCurrent(weather);

  const [forecastWeather, loadingforecast, errorforecast] =
    useForeCastLocation(weather);

  if (loadingCurrent || loadingforecast) {
    return <Loading />;
  }

  if (errorCurrent && errorforecast) {
    return <Error />;
  }
  if (!currentWeather || !forecastWeather) return null;
  return (
    <Container>
      <ContainerCurrent>
        <CardCurrent currentWeather={currentWeather as WeatherCurrent} />
        <InformationToday aboutToday={forecastWeather as WeatherForecast} />
      </ContainerCurrent>
      <CardForeCast forecastWeather={forecastWeather as WeatherForecast} />
    </Container>
  );
};

export default CardWeather;
