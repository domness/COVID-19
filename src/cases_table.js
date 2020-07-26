import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as _ from 'lodash';

const useStyles = makeStyles({
  table: {
    // minWidth: '650',
  },
});

function CasesTable({data}) {
  const classes = useStyles();
  const tableData = _.reverse(_.sortBy(data, 'specimenDate'));
  // console.log(data);
  // const tableData = data;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
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
