import styled from "styled-components";

const Row = styled.div`
  & {
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
  }
  ,
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default ({ children, backgroundColor, style }) => {
  return <Row style={style} backgroundColor={backgroundColor}>{children}</Row>;
};
