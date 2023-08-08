import styled from "styled-components";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import useApiLocation from "../Hooks/UseLocate";
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
  const key = "17afd8ed31e14b1abf4160832231807";

  const [WeatherApi, loadingApi, errorApi] = useApiLocation(weather, key);

  if (loadingApi) {
    return <Loading />;
  }

  if (errorApi) {
    return <Error />;
  }
  if (WeatherApi)
    return (
      <Container>
        <ContainerCurrent>
          <CardCurrent currentWeather={WeatherApi as WeatherCurrent} />
          <InformationToday aboutToday={WeatherApi as WeatherForecast} />
        </ContainerCurrent>
        <CardForeCast WeatherApi={WeatherApi as WeatherForecast} />
      </Container>
    );
};

export default CardWeather;
