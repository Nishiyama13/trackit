import styled from "styled-components";

export const ContainerSignUp = styled.div`
  width: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
height: 45px;
width: 300px;
border-radius: 5px;

  border-style: none;
  font-family: "Lexend Deca";
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  background-color: #52b6ff;
  color: #FFFF

  &:disabled {
    background-color: #c02828;
  }
`;
