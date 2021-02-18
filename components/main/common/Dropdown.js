import React, { useState } from "react";
import Div from "./Div";
import Text from "./Text";
import Link from "next/link";
import Icon from "./Icon";
import styled from "styled-components";

const Item = styled.a`
  color: #fff;
  font-size: 12px;
`;

const List = styled.ul`
  list-style: none;
`;

const ToggleButton = styled.div`
  & {
    cursor: pointer;
  }

  ,
  &:focus {
    border-color: red;
  }
`;

function Dropdown({
  title,
  items,
  style,
  icon,
  iconColor,
  iconSize,
  listStyle,
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  return (
    <Div style={style}>
      <ToggleButton
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <Text fontSize="12px">
          {title}{" "}
          <Icon
            style={{ float: "right", fontSize: iconSize }}
            icon={icon}
            color={iconColor}
          />
        </Text>
      </ToggleButton>
      {open && (
        <Div style={listStyle}>
          <List>
            {items.map((item) => (
              <li key={item.id}>
                <Link href="#">
                  <Item style={{}}>{item.value}</Item>
                </Link>
              </li>
            ))}
          </List>
        </Div>
      )}
    </Div>
  );
}

export default Dropdown;
