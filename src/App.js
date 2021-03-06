import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Container, CssBaseline, makeStyles, Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import Cases from './cases';
import CasesRegion from './cases_region';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Button component={Link} to="/" className={classes.link}>
              COVID-19 UK
            </Button>
          </Typography>
          <nav>
            <Button component={Link} to="/" className={classes.link} color="primary">
              Home
            </Button>
          </nav>
        </Toolbar>
      </AppBar>

      <Container component="main">
        <Switch>
          <Route path="/cases/:region">
            <CasesRegion />
          </Route>
          <Route path="/">
            <Cases />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
