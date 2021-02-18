import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./menu/";

const Sidebar = styled.div`
  background-color: #252c48;
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  @media (max-width: 992px) {
    display: none;
  }
`;


export default () => {
  return (
    <Sidebar>
      <Logo />
      <Menu />
    </Sidebar>
  );
};
