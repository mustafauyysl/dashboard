import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ icon, color, style }) => {
  return (
    <FontAwesomeIcon icon={icon} style={{ marginRight: 10, color: color, ...style }} />
  );
};
