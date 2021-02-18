import styled from "styled-components";

const Main = styled.div`
  margin-left: 292px;
  margin-top: -18px;
  height: auto;
  padding-left: 30px;
  padding-top: 80px;

  @media (max-width: 992px) {
    margin-left: 0;
    padding-left: 0px;

  }
`;

export default ({ children }) => {
  return <Main>{children}</Main>;
};
