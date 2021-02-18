import styled from "styled-components";
import Link from "next/link";
import Icon from "../../main/common/Icon";

const MenuItem = styled.div`
  margin: 20px;
  margin-bottom: 25px;
`;

const Text = styled.a`
  font-size: 14px; 
  color: #fff;
  margin: 10;
  cursor: pointer;
  opacity: 0.8;
`;

export default ({ title, link, icon }) => {
  return (
    <MenuItem>
      <Icon icon={icon} color="#fff" />
      <Link href={link}>
        <Text>{title}</Text>
      </Link>
    </MenuItem>
  );
};
