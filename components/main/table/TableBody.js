import Col from "../common/Col";
import Text from "../common/Text";
import Row from "../common/Row";


export default ({ productName, dateTime, price, quantity, amount }) => {
  return (
    <Row>
      <Col width="20%">
        <Text fontSize="12px">{productName}</Text>
      </Col>
      <Col width="20%">
        <Text fontSize="12px">{dateTime}</Text>
      </Col>
      <Col width="20%">
        <Text fontSize="12px">{price}</Text>
      </Col>
      <Col width="20%">
        <Text fontSize="12px">{quantity}</Text>
      </Col>
      <Col width="20%">
        <Text fontSize="12px">{amount}</Text>
      </Col>
    </Row>
  );
};
