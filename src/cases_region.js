import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCases from './services/get_cases';
import * as _ from 'lodash';
import { Paper, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import CasesChart from './cases_chart';
import CasesTable from './cases_table';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

function CasesRegion() {
  const classes = useStyles();
  const { region } = useParams();
  const [data, setData] = useState([]);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    async function fetchCases() {
      try {
        const { data } = await getCases();
        const grouped = _.groupBy(data.ltlas, 'areaName');
        setData([...grouped[region]]);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCases();
  }, [region]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h5" color="primary">
            {region}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <CasesChart data={data} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <CasesTable data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CasesRegion;
