import React from "react";
import {
  CardHilights,
  H2Hilight,
  ContainerHilights,
  DivSunrise,
  TitleSunRise,
  ImgSunrise,
  SpanSunRise,
  ContainerAboutSensation,
  ContainerVisibilityAndSpeed,
  SpanSunset,
  ContainerTime,
  ImgSunset,
  SunriseAbout,
  TitleSunset,
  DivSunset,
  SunsetAbout,
  SensationDiv,
  ImgSensation,
  TitleSensation,
  SpanSensation,
  SensationCard,
  ImgUmidity,
  UmidityCard,
  UmidityDiv,
  SpanUmity,
  TitleUmidity,
  CardVisibility,
  CardSpeed,
  TitleVisibility,
  VisibilityDuo,
  ImgIconVisibility,
  SpanVisibility,
  TitleSpeed,
  SpeedDuo,
  ImgSpeedIcon,
  SpanSpeed,
  HilightTop,
  HilightBot,
  ContainerPrevisionTemp,
  MinTempDiv,
  MaxTempDiv,
  TitleMinTemp,
  SpanMinTemp,
  TitleMaxTemp,
  SpanMaxTemp,
} from "./Style";

import sunriseImg from "../../../assets/icons8-sunrise.svg";
import sunsetImg from "../../../assets/moon-svgrepo-com.svg";
import tempSensationIcon from "../../../assets/thermometer-fill-svgrepo-com.svg";
import umidityIcon from "../../../assets/humidity-svgrepo-com.svg";
import visibilityIcon from "../../../assets/visibility-svgrepo-com.svg";
import windSpeed from "../../../assets/wind-svgrepo-com.svg";
import { WeatherApi } from "../../../Types/Types";

const InformationToday: React.FC<WeatherApi> = ({ aboutToday }) => {
  return (
    <>
      {" "}
      <CardHilights>
        <H2Hilight>Informações de hoje</H2Hilight>
        <ContainerHilights>
          <HilightTop>
            <ContainerTime>
              <DivSunrise>
                <TitleSunRise>Nascer do sol:</TitleSunRise>
                <SunriseAbout>
                  <ImgSunrise src={sunriseImg} />
                  <SpanSunRise>{` ${aboutToday.forecast.forecastday[0].astro.sunrise}`}</SpanSunRise>
                </SunriseAbout>
              </DivSunrise>
              <DivSunset>
                <TitleSunset>Por do sol:</TitleSunset>
                <SunsetAbout>
                  <ImgSunset src={sunsetImg} />
                  <SpanSunset>{`${aboutToday.forecast.forecastday[0].astro.sunset} `}</SpanSunset>
                </SunsetAbout>
              </DivSunset>
            </ContainerTime>
            <ContainerAboutSensation>
              <SensationCard>
                <TitleSensation>Sensação termica:</TitleSensation>
                <SensationDiv>
                  <ImgSensation src={tempSensationIcon} />
                  <SpanSensation>{`${aboutToday.current.feelslike_c}°C `}</SpanSensation>
                </SensationDiv>
              </SensationCard>
              <UmidityCard>
                <TitleUmidity>Umidade:</TitleUmidity>
                <UmidityDiv>
                  <ImgUmidity src={umidityIcon} />
                  <SpanUmity>{`${aboutToday.current.humidity}%`}</SpanUmity>
                </UmidityDiv>
              </UmidityCard>
            </ContainerAboutSensation>
          </HilightTop>
          <HilightBot>
            <ContainerVisibilityAndSpeed>
              <CardVisibility>
                <TitleVisibility>Visibilidade:</TitleVisibility>
                <VisibilityDuo>
                  <ImgIconVisibility src={visibilityIcon} />
                  <SpanVisibility>{`${aboutToday.current.vis_km}km`}</SpanVisibility>
                </VisibilityDuo>
              </CardVisibility>
              <CardSpeed>
                <TitleSpeed>Vento:</TitleSpeed>
                <SpeedDuo>
                  <ImgSpeedIcon src={windSpeed} />
                  <SpanSpeed>{`${aboutToday.current.wind_kph}   km/h`}</SpanSpeed>
                </SpeedDuo>
              </CardSpeed>
            </ContainerVisibilityAndSpeed>
            <ContainerPrevisionTemp>
              <MinTempDiv>
                <TitleMinTemp>Temperatura minima:</TitleMinTemp>
                <SpanMinTemp>{`${aboutToday.forecast.forecastday[0].day.mintemp_c}°C `}</SpanMinTemp>
              </MinTempDiv>
              <MaxTempDiv>
                <TitleMaxTemp>Temperatura maxima:</TitleMaxTemp>
                <SpanMaxTemp>{`${aboutToday.forecast.forecastday[0].day.maxtemp_c}°C `}</SpanMaxTemp>
              </MaxTempDiv>
            </ContainerPrevisionTemp>
          </HilightBot>
        </ContainerHilights>
      </CardHilights>{" "}
    </>
  );
};

export default InformationToday;
