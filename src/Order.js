import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, "Sales", "1,194.58", "11,418.59"),
  createData(1, "Advertising", "6,865.87", "65,763.1"),
  createData(2, "Inventory", "4,423.65", "65,986"),
  createData(3, "Entertainment", "0.00", "0.00"),
  createData(4, "Product", "4,675.10", "44,5556"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Account watchlist</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>This Month</TableCell>
            <TableCell>YTD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
