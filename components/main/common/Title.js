import styled from "styled-components";

const Title = styled.h1`
  color: #fff;
  font-weight: lighter;
  margin-left: 10px;
`;

export default ({ text, style }) => {
  return <Title style={style}>{text}</Title>;
};
