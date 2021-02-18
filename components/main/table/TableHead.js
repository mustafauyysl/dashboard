import styled from "styled-components";
import Col from "../common/Col";
import Row from "../common/Row";
import Text from "../common/Text";
import Link from "next/link";
import Icon from "../common/Icon";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import TableHeadItem from "./TableHeadItem";

const heads = [
  <TableHeadItem title="Product Name"/>,
  <TableHeadItem title="Date time" />,
  <TableHeadItem title="Price" />,
  <TableHeadItem title="Quantity" />,
  <TableHeadItem title="Amount" />,
];

const HeadButton = styled.a`
  color: red;
  cursor: pointer;
`;

export default ({ title }) => {
  return (
    <div>
      <Row>
        <Col width="90%">
          <Text>{title}</Text>
        </Col>
        <Col width="10%">
          <Link href="#">
            <HeadButton>
              <Text fontSize="12px" color="red">
                Export{" "}
                <Icon
                  style={{ marginLeft: 10 }}
                  color="red"
                  icon={faDownload}
                />
              </Text>
            </HeadButton>
          </Link>
        </Col>
      </Row>
      <Row backgroundColor="#1c2039">{heads}</Row>
    </div>
  );
};
