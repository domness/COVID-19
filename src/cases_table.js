import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import * as _ from 'lodash';

function CasesTable({ data }) {
  const tableData = _.reverse(_.sortBy(data, 'specimenDate'));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Cases</TableCell>
            <TableCell align="right">Lab Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.specimenDate}>
              <TableCell component="th" scope="row">
                {row.specimenDate}
              </TableCell>
              <TableCell align="right">{row.dailyLabConfirmedCases}</TableCell>
              <TableCell align="right">{row.dailyTotalLabConfirmedCasesRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CasesTable;
