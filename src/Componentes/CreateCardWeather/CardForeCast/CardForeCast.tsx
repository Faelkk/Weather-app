import styled from "styled-components";
import { WeatherApi } from "../../../Types/Types";

const TitleCards = styled.h2`
  color: #151515;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
`;
const Container = styled.div`
  margin-top: 3rem;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    flex-wrap: wrap;
    width: 70%;
  }
  @media (max-width: 508px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const Card = styled.div`
  background: #0c0b0b;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  width: 120px;
  padding: 15px;
  box-shadow: rgb(7, 6, 6) 0px 3px 10px 0px;
`;
const TitleCard = styled.h2`
  color: #cdcccc;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
const IconCard = styled.img``;
const ContainerTemp = styled.div`
  color: #b7b5b5;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: capitalize;
  font-size: 0.8rem;
  width: 70%;
  justify-content: space-between;
  display: flex;
  text-align: center;
`;
const MinTemp = styled.span`
  display: flex;
  flex-direction: column;
`;
const MaxTemp = styled.span`
  display: flex;

  flex-direction: column;
`;
const CardsCenter = styled.div`
  padding: 15px;
  border-radius: 3px;
  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Min = styled.span`
  color: #b7b5b5;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
const Max = styled.span`
  color: #b7b5b5;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const CardForeCast: React.FC<WeatherApi> = ({ forecastWeather }) => {
  return (
    <Container>
      <CardsCenter>
        <TitleCards>Previsão dos proximos 7 dias</TitleCards>
        <CardContainer>
          {forecastWeather.forecast.forecastday.map((weather, index) => {
            const data = new Date(weather.date_epoch * 1000);
            const diaDaSemana = data.toLocaleString("pt-BR", {
              weekday: "long",
            });
            // pt-br é a liguagem  caso um dia precise o weekday serve pra pegar o dia, e o long é o nome completo, caso queira curtos é outro
            return (
              <Card key={index}>
                <TitleCard>{diaDaSemana}</TitleCard>
                <IconCard src={weather.day.condition.icon} />
                <ContainerTemp>
                  <MinTemp>
                    <Min>min: </Min> {`${weather.day.mintemp_c.toFixed(0)}°C `}
                  </MinTemp>

                  <MaxTemp>
                    <Max>max: </Max> {`${weather.day.maxtemp_c.toFixed(0)}° `}
                  </MaxTemp>
                </ContainerTemp>
              </Card>
            );
          })}
        </CardContainer>
      </CardsCenter>
    </Container>
  );
};

export default CardForeCast;
