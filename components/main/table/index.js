import Div from "../common/Div";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const tableContent = [
  <TableBody
    productName="Pocket Drone"
    dateTime="07 April 2018"
    price="$129.99"
    quantity="32"
    amount="$6089.58"
  />,
  <TableBody
    productName="Pocket Drone"
    dateTime="07 April 2018"
    price="$129.99"
    quantity="32"
    amount="$6089.58"
  />,
];

function Table() {
  return (
    <Div width="95%">
      <TableHead title="Top Selling Products" />
      {tableContent}
    </Div>
  );
}

export default Table;
