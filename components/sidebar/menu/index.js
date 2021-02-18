import styled from "styled-components";
import MenuItem from "./MenuItem";
import MenuTitle from "./MenuTitle";
import {
  faInbox,
  faTachometerAlt,
  faChartLine,
  faArchive,
  faTag,
  faTags,
  faCut,
  faBriefcase,
  faUsers,
  faCube,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const menus = [
  <MenuTitle text="main" />,
  <MenuItem title="Dashboard" link="/" icon={faTachometerAlt} />,
  <MenuItem title="Orders" link="/orders" icon={faInbox} />,
  <MenuItem title="Analytics" link="/" icon={faChartLine} />,
  <MenuItem title="Categories" link="/" icon={faArchive} />,
  <MenuItem title="Collections" link="/" icon={faTags} />,
  <MenuItem title="Products" link="/" icon={faTag} />,
  <MenuItem title="Discount" link="/" icon={faCut} />,
  <MenuItem title="Employees" link="/" icon={faBriefcase} />,
  <MenuItem title="Customer" link="/" icon={faUsers} />,
  <MenuTitle text="sales channels" />,
  <MenuItem title="Online Store" link="/" icon={faCube} />,
  <MenuItem title="Marketing" link="/" icon={faEnvelope} />,
];

const Menu = styled.div`
  margin: 20px;
`;

export default () => {
  return <Menu>{menus}</Menu>;
};
