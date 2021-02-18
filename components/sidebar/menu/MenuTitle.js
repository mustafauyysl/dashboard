import styled from "styled-components";

const MenuTitle = styled.h3`
  margin: 20px;
  margin-top: 50px;
  text-transform: uppercase;
  color: #ccc;
  font-size: 12px;
  opacity: 0.4
`;

export default ({ text }) => {
  return (
    <MenuTitle>
        {text}
    </MenuTitle>
  );
};
