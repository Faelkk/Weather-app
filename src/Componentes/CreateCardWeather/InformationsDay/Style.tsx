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
    width: 300px;
    max-width: 300px;
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

export const ContainerInf = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DivCardsInf = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  max-width: 200px;
`;
export const TitleInf = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;
export const AboutInf = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ImgInf = styled.img`
  width: 24px;
`;
export const SpanInf = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const ContainerPrevisionTemp = styled.div`
  gap: 2rem;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TempDiv = styled.div`
  display: flex;
  width: 150px;
  max-width: 200px;
  flex-direction: column;
`;
export const TitleTemp = styled.h3`
  color: #747272;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgTemp = styled.img``;
export const SpanTemp = styled.span`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
