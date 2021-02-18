import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => props.weight || "lighter"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin: 20px;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : null)};
`;

export default ({ children, fontSize, color, weight, uppercase }) => {
  return (
    <Text
      uppercase={uppercase}
      weight={weight}
      color={color}
      fontSize={fontSize}
    >
      {children}
    </Text>
  );
};
