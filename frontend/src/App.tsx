import FixVideo from './components/video/video'
import SmoothScroll from "./components/common/smoothScroll/smoothScroll";
import { CssBaseline, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/header/header';
import Listings from './components/listing/listings'

import Avatars from './components/header/avatars'

const useStyles = makeStyles(theme => ({

  root: {
    minHeight: '100vh',
  }

}))

function App() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Listings />

      </div>
    </>
  );
}

export default App;
