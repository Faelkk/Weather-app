import styled from "styled-components";
import ImgError from "../../assets/404 Error-bro.svg";

const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
`;
const ImgIcon = styled.img`
  width: 300px;
  background: #fffcfc;
  border-radius: 3px;
`;

const SpanError = styled.span`
  font-family: "Poppins", sans-serif;
  color: #8d8c8c;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  font-weight: 500;
`;
const Error = () => {
  return (
    <ContainerError>
      <SpanError>Localização não encontrada</SpanError>
      <ImgIcon src={ImgError} />
    </ContainerError>
  );
};

export default Error;
