import Layout from "../components/layout";
import CardsLayout from "../components/main/cards/CardsLayout";
import Title from "../components/main/common/Title";
import Row from "../components/main/common/Row";
import Col from "../components/main/common/Col";
import Chart from "../components/main/chart/Chart";
import Table from "../components/main/table";
import Dropdown from "../components/main/common/Dropdown";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    id: 1,
    value: "Item 1",
  },
  {
    id: 2,
    value: "Item 2",
  },
  {
    id: 3,
    value: "Item 3",
  },
];
function HomePage() {
  return (
    <Layout>
      <Row style={{ marginBottom: 40 }}>
        <Col>
          <Title style={{marginRight: 50}} text="Dashboard" />
        </Col>
        <Col>
          <Dropdown
            items={items}
            title="18/11/2020"
            icon={faAngleDown}
            iconColor='red'
            style={{
              marginTop: 10,
              width: 150,
              borderRadius: 50,
              padding: 0,
            }}
            listStyle={{
              position: 'absolute',
              marginLeft: -1,
              width: 150
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col width="36%">
          <CardsLayout />
        </Col>
        <Col width="64%">
          <Chart />
        </Col>
      </Row>
      <Row>
        <Table />
      </Row>
    </Layout>
  );
}

export default HomePage;
