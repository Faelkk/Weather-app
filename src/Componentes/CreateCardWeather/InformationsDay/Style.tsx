import styled from "styled-components";

export const CardHilights = styled.div`
  background: #0c0b0b;
  padding: 20px;
  border-radius: 4px;
  max-height: 213px;
  height: 213px;
  @media (max-width: 768px) {
    box-shadow: rgb(24, 24, 24) 0px 3px 10px 0px;
    height: 100%;
    max-height: 100%;
  }
  box-shadow: rgb(7, 6, 6) 0px 3px 10px 0px;
`;
export const ContainerHilights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    max-width: 300px;
  }
`;

export const HilightTop = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const HilightBot = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const H2Hilight = styled.h2`
  color: #fdfbfb;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 7%;
  text-align: center;
`;

export const ContainerTime = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DivSunrise = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  max-width: 200px;
`;
export const TitleSunRise = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;
export const SunriseAbout = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ImgSunrise = styled.img`
  width: 24px;
`;
export const SpanSunRise = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const DivSunset = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  max-width: 200px;
`;
export const TitleSunset = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
`;
export const SunsetAbout = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ImgSunset = styled.img`
  width: 24px;
`;
export const SpanSunset = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const ContainerAboutSensation = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SensationCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  max-width: 200px;
`;
export const SensationDiv = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ImgSensation = styled.img`
  width: 26px;
`;
export const TitleSensation = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
`;
export const SpanSensation = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;
export const UmidityCard = styled.div`
  width: 150px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
`;
export const UmidityDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ImgUmidity = styled.img`
  width: 24px;
`;
export const TitleUmidity = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
`;
export const SpanUmity = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const ContainerVisibilityAndSpeed = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CardVisibility = styled.div`
  width: 150px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
`;
export const TitleVisibility = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
`;
export const VisibilityDuo = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ImgIconVisibility = styled.img`
  width: 24px;
`;
export const SpanVisibility = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
export const CardSpeed = styled.div`
  width: 150px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
`;
export const TitleSpeed = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
`;
export const SpeedDuo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ImgSpeedIcon = styled.img`
  width: 24px;
`;
export const SpanSpeed = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
export const ContainerPrevisionTemp = styled.div`
  gap: 2rem;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MinTempDiv = styled.div`
  display: flex;
  width: 150px;
  max-width: 200px;
  flex-direction: column;
`;
export const TitleMinTemp = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgMinTemp = styled.img``;
export const SpanMinTemp = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
export const MaxTempDiv = styled.div`
  display: flex;
  width: 150px;
  max-width: 200px;
  flex-direction: column;
`;
export const TitleMaxTemp = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const DuoMaxTemp = styled.div`
  display: flex;
`;

export const SpanMaxTemp = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
