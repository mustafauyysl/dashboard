import Card from "./Card";
import Row from "../common/Row";
import Col from "../common/Col";

function CardsLayout() {
  return (
    <div>
      <Row>
        <Col>
          <Card
            title="Customer"
            total="45,320"
            percent="5.24%"
            time="Since last mounth"
          />
        </Col>
        <Col>
          <Card
            title="Orders"
            total="45,320"
            percent="1.23%"
            time="Since last mounth"
            decrease={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            title="Earnings"
            total="$7,524"
            percent="7.85%"
            time="Since last mounth"
            decrease={true}
          />
        </Col>
        <Col>
          <Card
            title="Growth"
            total="+ 35.52%"
            percent="372%"
            time="Since last mounth"
          />
        </Col>
      </Row>
    </div>
  );
}

export default CardsLayout;
