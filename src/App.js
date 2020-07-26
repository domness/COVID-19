import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Container, CssBaseline, makeStyles } from '@material-ui/core';
import Cases from './cases';

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
            Covid-19 UK
          </Typography>
          <nav></nav>
        </Toolbar>
      </AppBar>

      <Container component="main">
        <Cases />
      </Container>
    </div>
  );
}

export default App;
