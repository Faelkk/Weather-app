import styled from "styled-components";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import { useForeCastLocation } from "../Hooks/UseLocate";
import CardCurrent from "./CardCurrent/CardCurrent";
import CardForeCast from "./CardForeCast/CardForeCast";
import InformationToday from "./InformationsDay/InformationToday";
import { ContainerCurrent } from "./CardCurrent/style";
import { WeatherType } from "../../Types/Types";
import useLocationCurrent from "../Hooks/UseLocate";

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
  if (currentWeather.length !== 0) {
    return (
      <Container>
        <ContainerCurrent>
          <CardCurrent currentWeather={currentWeather} />
          <InformationToday aboutToday={forecastWeather} />
        </ContainerCurrent>

        <CardForeCast forecastWeather={forecastWeather} />
      </Container>
    );
  }
};

export default CardWeather;
