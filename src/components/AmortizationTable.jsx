import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,

} from "@mui/material";

const AmortizationTable = ({ schedule, currency = "USD" }) => {
  if (!schedule || schedule.length === 0) return null;

  return (
    <TableContainer component={Paper} sx={{ mt: 4, maxHeight: "70vh" }}>
      <Typography
        variant="h6"
        sx={{
          p: 2,
          position: "sticky",
          top: 0,
          backgroundColor: "background.paper",
          zIndex: 3
        }}
      >
        Amortization Schedule ({currency})
      </Typography>
      <Table stickyHeader sx={{ width: "100%", tableLayout: "fixed" }}>
        <TableHead>
          <TableRow
            sx={{
              position: "sticky",
              top: "64px", // adjust if needed
              zIndex: 2,
              backgroundColor: "background.paper",
              boxShadow: "inset 0px -1px 0px 0px rgba(0,0,0,0.12)"
            }}
          >
            <TableCell align="left">Month</TableCell>
            <TableCell align="center">Principal</TableCell>
            <TableCell align="center">Interest</TableCell>
            <TableCell align="right">Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.month}</TableCell>
              <TableCell align="center"> {parseFloat(row.principalPaid).toFixed(2)}{" "}{currency}</TableCell>
              <TableCell align="center">{parseFloat(row.interest).toFixed(2)}{" "}{currency}</TableCell>
              <TableCell align="right">
                {parseFloat(row.balance).toFixed(2)}{" "}{currency}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default AmortizationTable;
