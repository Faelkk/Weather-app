import styled from "styled-components";
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background: #eee;
  padding: 5px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const HeaderApp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
`;

export const TitleApp = styled.h1`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`;
