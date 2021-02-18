import Div from "../common/Div";
import Text from "../common/Text";
import Icon from "../common/Icon";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

export default ({ title, total, percent, time, decrease }) => {
  return (
    <Div width="190px">
      <Text fontSize="18px">{title}</Text>
      <Text weight="bold" fontSize="18px">
        {total}
      </Text>
      <Text fontSize="12px" color={decrease ? "red" : "green"}>
        <Icon
          style={{ marginRight: 5 }}
          color={decrease ? "red" : "green"}
          icon={decrease ? faLongArrowAltDown : faLongArrowAltUp}
        />
        {percent}
      </Text>
      <Text fontSize="9px" color="#909090">
        {time}
      </Text>
    </Div>
  );
};
