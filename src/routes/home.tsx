import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

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
    font-size: 3.5em;
  }
`

export default function Home() {
  const user = auth.currentUser;
  const navigate = useNavigate();

  function onLogin() {
    navigate("/login");
  }

  function onSignIn() {
    navigate("/create-account");
  }

  function onPlay() {
    navigate("/main");
  }

  const onLogOut = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      await auth.signOut();
      navigate("/home");
    }
  };
  
  return (
    
    <Wrapper>
      {
        user === null 
        ? 
          <Div>
            <Title>Clickers Land</Title><br />
            <Button onClick={onLogin}>Login</Button>
            <Button onClick={onSignIn}>Sign in</Button>
          </Div>
        : 
          <Div>
            <Title>Clickers Land</Title><br />
            <Button onClick={onPlay}>Play</Button>
            <Button onClick={onLogOut}>Log Out</Button>
          </Div>
      }
    </Wrapper>
  );
}
