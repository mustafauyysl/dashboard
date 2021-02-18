import Head from "next/head";
import Sidebar from "./sidebar";
import Main from "./main";
import styled from "styled-components";
import Dropdown from "./main/common/Dropdown";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const CollapseButton = styled.div`
  position: absolute;
  right: 40px;
  top: 70px;
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;
const menus = [
  {
    id: 1,
    value: "Dashboard",
  },
  {
    id: 2,
    value: "Orders",
  },
  {
    id: 3,
    value: "Analytics",
  },
  {
    id: 3,
    value: "Categories",
  },
  {
    id: 3,
    value: "Collections",
  },
  {
    id: 3,
    value: "Products",
  },
  {
    id: 3,
    value: "Discount",
  },
  {
    id: 3,
    value: "Employees",
  },
  {
    id: 3,
    value: "Customer",
  },
  {
    id: 3,
    value: "Online Store",
  },
  {
    id: 3,
    value: "Marketing",
  },
];

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Sidebar />
      <CollapseButton>
        <Dropdown
          items={menus}
          style={{ paddingLeft: 10, paddingBottom: 20 }}
          listStyle={{
            position: "absolute",
            right: -35,
            width: 350,
            top: 80,
            paddingRight: 0,
          }}
          icon={faBars}
          iconSize={18}
        />
      </CollapseButton>
      <Main>{children}</Main>
    </div>
  );
}

export default Layout;
