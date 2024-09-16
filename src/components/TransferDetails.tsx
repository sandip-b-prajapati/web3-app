import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TransferDetails = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="transfer table">
        <TableHead>
          <TableRow>
            <TableCell>Tx Hash</TableCell>
            <TableCell align="right">from</TableCell>
            <TableCell align="right">to</TableCell>
            <TableCell align="right">value</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default TransferDetails;
