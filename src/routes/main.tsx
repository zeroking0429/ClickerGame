import styled from "styled-components";

const Wrapper = styled.div`
  width: auto;
  height: auto;
`

const Button = styled.button`
  background-color: black;
  color: white;
  border: 7px solid;
  border-color: white gray gray white;
  font-size: 3em;
  margin: 20px 0;
  padding: 7px 14px;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    border-color: gray white white gray;
  }
`

const Text = styled.p`
  font-size: 2.5em;
  margin-bottom: 10px;
`

export default function Main() {
  return (
    <Wrapper>
      <Button>Click</Button>
      <Button>Sell</Button>
      <Text>Items : 0</Text>
      <Text>Money : 0</Text>
    </Wrapper>
  );
}