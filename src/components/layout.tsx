import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border: 2px solid white;
`

export default function Layout() {
  return (
    <>
      <Wrapper>
        <Link to={"/main"}>Main</Link>
        <Link to={"/main/upgrade"}>Upgrade</Link>
      </Wrapper>
      <Outlet />
    </>
  );
}