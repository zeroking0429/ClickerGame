import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Div = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  text-align: center;
`

const Title = styled.span`
  padding: 10px;
  padding-top: 5px;
  font-size: 3em;
  border: 2px dashed white;
`

const Button = styled.button`
  padding: 10px 20px;
  margin: 50px 20px;
  color: white;
  background-color: black;
  font-size: 3em;
  border: 2px solid white;
  border-radius: 10px;
  transition-duration: 0.2s;
  &:hover {
    transition-duration: 0.5s;
    cursor: pointer;
    color: black;
    background-color: white;
    font-size: 3.75em;
  }
`

export default function Home() {
  return (
    <Wrapper>
      <Div>
        <Title>Clickers Land</Title><br />
        <Button>Login</Button>
        <Button>Sign in</Button>
      </Div>
    </Wrapper>
  );
}