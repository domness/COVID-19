import React, { useState } from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Container, CssBaseline, makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Cases from './Cases';
import CasesRegion from './CasesRegion';
import { AppContext } from './context';

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
}));

function App() {
  const classes = useStyles();
  const [cases, setCases] = useState({});

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Covid-19 UK
          </Typography>
          <nav></nav>
        </Toolbar>
      </AppBar>

      <AppContext.Provider value={{ cases, setCases }}>
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
      </AppContext.Provider>
    </div>
  );
}

export default App;
