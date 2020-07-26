import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import getCases from './services/get_cases';
import { Button, Typography, Container, makeStyles } from '@material-ui/core';
import * as _ from 'lodash';

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
  typography: {
    marginTop: theme.spacing(2),
  },
}));

function Cases() {
  const classes = useStyles();
  const [cases, setCases] = useState({});
  const componentIsMounted = useRef(true);

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  useEffect(() => {
    async function fetchCases() {
      try {
        const { data } = await getCases();

        if (componentIsMounted.current) {
          const grouped = _.uniq(data.ltlas.map(i => i.areaName)).sort();
          setCases({
            metadata: data.metadata,
            dailyRecords: data.dailyRecords,
            ltlas: grouped,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchCases();
  }, []);

  const items = cases.ltlas?.map((key, i) =>
    <div key={i}>
      <Button component={Link} to={`/cases/${key}`} color="primary">
        {key}
      </Button>
    </div>
  );

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="subtitle2" className={classes.typography}>
        { cases.metadata?.disclaimer }
      </Typography>

      <Typography variant="h6" className={classes.typography}>
        Daily Cases
      </Typography>

      <Typography variant="body1" className={classes.typography}>
        { cases.dailyRecords?.dailyLabConfirmedCases }
      </Typography>

      <Typography variant="caption" className={classes.typography} color="textSecondary">
        Last updated: { cases.metadata?.lastUpdatedAt }
      </Typography>

      <Typography variant="h6" className={classes.typography}>
        Regions
      </Typography>

      {items}
    </Container>
  );
}

export default Cases;
