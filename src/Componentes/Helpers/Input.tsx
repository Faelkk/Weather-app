import React from "react";
import imgIcon from "../../assets/search_FILL0_wght400_GRAD0_opsz48.svg";
import styled from "styled-components";
import { inputTypes } from "../../Types/Types";

const Form = styled.form`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  box-shadow: rgb(192, 187, 187) 0px 3px 10px 0px;
  border-radius: 3px;
  padding: 5px 10px 5px 10px;
`;
const Input = styled.input`
  font-family: "Poppins", sans-serif;
  background: none;
`;
const ImgLocate = styled.img`
  width: 25px;
`;
const Label = styled.label``;
const InputWeather = ({ id, placeholder, type }: inputTypes) => {
  const [inputValue, setInputValue] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInputValue("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={id}>
        <ImgLocate src={imgIcon} />
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
      />
    </Form>
  );
};

export default InputWeather;
