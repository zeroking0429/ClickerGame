import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0;
`;

export const Title = styled.h1`
  font-size: 42px;
`;

export const Logo = styled.img`
  border: 2px solid white;
  border-radius: 50px;
  width: 75px;
  height: 75px;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border-radius: 50px;
  border: 2px solid white;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    transition-duration: 0.3s;
    &:hover {
      transition-duration: 0.5s;
      color: black;
      background-color: white;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: red;
`;