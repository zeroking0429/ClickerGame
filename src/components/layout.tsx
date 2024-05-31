import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div`
  display: block;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border: 2px solid white;
  a {
    font-size: 3em;
    text-decoration: none;
    color: white;
    margin-right: 30px;
  }
`

const Wrapper = styled.div`
  margin: 20px;
`

export default function Layout() {
  return (
    <Wrapper>
      <MenuWrapper>
        <Link to={"/main"}>Main</Link>
        <Link to={"/main/upgrade"}>Upgrade</Link>
      </MenuWrapper>
      <Outlet />
    </Wrapper>
  );
}