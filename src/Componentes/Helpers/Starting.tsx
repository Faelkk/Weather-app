import styled from "styled-components";
import InputWeather from "./Input";
import imgStart from "../../assets/Weather-pana.svg";

const ContainerStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

const TitleStart = styled.div`
  font-family: "Poppins", sans-serif;
  color: #8d8c8c;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  font-weight: 500;
`;
const ImgIcon = styled.img`
  background: #eee;
  border-radius: 2px;
  width: 450px;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
const ContainerInput = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export interface SearchHandle {
  searchvalueHandle: (value: string) => void;
}

const Starting: React.FC<SearchHandle> = ({ searchvalueHandle }) => {
  function handleSearchValue(value: string) {
    searchvalueHandle(value);
  }

  return (
    <ContainerStart>
      <ContainerInput>
        <TitleStart>Pesquise sua cidade</TitleStart>
        <InputWeather
          type="text"
          placeholder="Pesquise uma cidade"
          id="weather-input"
          required
          onSearch={handleSearchValue}
        />
      </ContainerInput>
      <ImgIcon src={imgStart} />
    </ContainerStart>
  );
};

export default Starting;
