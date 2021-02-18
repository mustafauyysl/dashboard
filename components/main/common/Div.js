import styled from "styled-components";

const Div = styled.div`
  margin: 10px;
  background-color: #252c48;
  height: ${(props) => props.height};
  border-radius: 7px;
  overflow: hidden;
  display: inline-block;
  width: ${(props) => props.width};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export default ({ children, width, height, style }) => {
  return (
    <Div style={style} width={width} height={height}>
      {children}
    </Div>
  );
};
