import React from "react";
import {
  CardHilights,
  H2Hilight,
  ContainerHilights,
  DivCardsInf,
  TitleInf,
  ImgInf,
  SpanInf,
  ContainerInf,
  HilightTop,
  HilightBot,
  ContainerPrevisionTemp,
  TempDiv,
  TitleTemp,
  SpanTemp,
  AboutInf,
} from "./Style";

import sunriseImg from "../../../assets/icons8-sunrise.svg";
import sunsetImg from "../../../assets/moon-svgrepo-com.svg";
import tempSensationIcon from "../../../assets/thermometer-fill-svgrepo-com.svg";
import umidityIcon from "../../../assets/humidity-svgrepo-com.svg";
import visibilityIcon from "../../../assets/visibility-svgrepo-com.svg";
import windSpeed from "../../../assets/wind-svgrepo-com.svg";
import { WeatherApi } from "../../../Types/Types";

const InformationToday: React.FC<WeatherApi> = ({ aboutToday }) => {
  if (!aboutToday) return null;
  return (
    <>
      {" "}
      <CardHilights>
        <H2Hilight>Informações de hoje</H2Hilight>
        <ContainerHilights>
          <HilightTop>
            <ContainerInf>
              <DivCardsInf>
                <TitleInf>Nascer do sol:</TitleInf>
                <AboutInf>
                  <ImgInf src={sunriseImg} />
                  <SpanInf>{` ${aboutToday.forecast.forecastday[0].astro.sunrise}`}</SpanInf>
                </AboutInf>
              </DivCardsInf>
              <DivCardsInf>
                <TitleInf>Por do sol:</TitleInf>
                <AboutInf>
                  <ImgInf src={sunsetImg} />
                  <SpanInf>{`${aboutToday.forecast.forecastday[0].astro.sunset} `}</SpanInf>
                </AboutInf>
              </DivCardsInf>
            </ContainerInf>
            <ContainerInf>
              <DivCardsInf>
                <TitleInf>Sensação termica:</TitleInf>
                <AboutInf>
                  <ImgInf src={tempSensationIcon} />
                  <SpanInf>{`${aboutToday.current.feelslike_c}°C `}</SpanInf>
                </AboutInf>
              </DivCardsInf>
              <DivCardsInf>
                <TitleInf>Umidade:</TitleInf>
                <AboutInf>
                  <ImgInf src={umidityIcon} />
                  <SpanInf>{`${aboutToday.current.humidity}%`}</SpanInf>
                </AboutInf>
              </DivCardsInf>
            </ContainerInf>
          </HilightTop>
          <HilightBot>
            <ContainerInf>
              <DivCardsInf>
                <TitleInf>Visibilidade:</TitleInf>
                <AboutInf>
                  <ImgInf src={visibilityIcon} />
                  <SpanInf>{`${aboutToday.current.vis_km}km`}</SpanInf>
                </AboutInf>
              </DivCardsInf>
              <DivCardsInf>
                <TitleInf>Vento:</TitleInf>
                <AboutInf>
                  <ImgInf src={windSpeed} />
                  <SpanInf>{`${aboutToday.current.wind_kph}   km/h`}</SpanInf>
                </AboutInf>
              </DivCardsInf>
            </ContainerInf>
            <ContainerPrevisionTemp>
              <TempDiv>
                <TitleTemp>Temperatura minima:</TitleTemp>
                <SpanTemp>{`${aboutToday.forecast.forecastday[0].day.mintemp_c}°C `}</SpanTemp>
              </TempDiv>
              <TempDiv>
                <TitleTemp>Temperatura maxima:</TitleTemp>
                <SpanTemp>{`${aboutToday.forecast.forecastday[0].day.maxtemp_c}°C `}</SpanTemp>
              </TempDiv>
            </ContainerPrevisionTemp>
          </HilightBot>
        </ContainerHilights>
      </CardHilights>{" "}
    </>
  );
};

export default InformationToday;
