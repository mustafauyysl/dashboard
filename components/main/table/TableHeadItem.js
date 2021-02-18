import Col from "../common/Col";
import Text from "../common/Text";
import Icon from "../common/Icon";
import { faSort } from "@fortawesome/free-solid-svg-icons";

export default ({ title, icon }) => {
  return (
    <Col width="20%">
      <Text fontSize="9px" color="#909090" uppercase={true}>
        {title}
        <Icon style={{ marginLeft: 10 }} icon={faSort} />
      </Text>
    </Col>
  );
};
