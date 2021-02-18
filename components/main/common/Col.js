import styled from "styled-components";

const Col = styled.div`
  float: left;
  width: ${(props) => props.width};
`;

export default ({ children, width }) => {
  return <Col width={width}>{children}</Col>;
};
