import styled from "styled-components";
import locationIcon from "../../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg";
const BtnLocation = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(192, 187, 187) 0px 3px 10px 0px;
  border-radius: 3px;
  padding: 5px 10px 5px 10px;
  gap: 0.6rem;
  cursor: pointer;
`;
const ImgLocation = styled.img`
  width: 25px;
`;
const SpanLocate = styled.span`
  font-family: "Poppins", sans-serif;
`;

const WeatherLocation = () => {
  return (
    <BtnLocation>
      <ImgLocation src={locationIcon} />
      <SpanLocate>Usar sua Localização</SpanLocate>
    </BtnLocation>
  );
};

export default WeatherLocation;
