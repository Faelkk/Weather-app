import styled from "styled-components";

export const ContainerCurrent = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CardNow = styled.div`
  background: #0c0b0b;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(7, 6, 6) 0px 3px 10px 0px;
  justify-content: center;
  @media (max-width: 768px) {
    width: 320px;
    max-width: 320px;
  }
`;
export const ImgWeather = styled.img`
  width: 150px;
`;
export const SpanTemp = styled.span`
  font-family: "Poppins", sans-serif;
  color: #e5e4e4;
  font-size: 3rem;
  font-weight: 500;
`;
export const SpanDescription = styled.span`
  color: #f7f3f3;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-transform: capitalize;
  font-size: 1.2rem;
`;
export const ContainerInfo = styled.div``;

export const TitleNow = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #c0c0c0;
  font-size: 0.85rem;
  border-radius: 2px;
  font-weight: 600;
`;

export const ContainerTemp = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #605e5e;
  margin-bottom: 15px;
`;
export const SpanLocate = styled.span`
  color: #b7b5b5;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
`;
export const AboutLocate = styled.div`
  display: flex;
  flex-direction: column;
`;
