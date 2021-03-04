import React from 'react';
import FixVideo from './components/video/video'
import SmoothScroll from "./components/common/smoothScroll/smoothScroll";
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/header/header';

const useStyles = makeStyles(theme => ({

  root: {
    minHeight: '100vh'
  }

}))

function App() {

  const classes = useStyles();

  return (
    <>
      <FixVideo />
      <div className={classes.root}>
        <CssBaseline />
        <Header />
      </div>
    </>
  );
}

export default App;
