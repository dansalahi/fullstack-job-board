import FixVideo from './components/video/video'
import SmoothScroll from './components/common/smoothScroll/smoothScroll'
import { CssBaseline, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/header/header'
import Listings from './components/listing/listings'
import Avatars from './components/header/avatars'

// react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}))

function App() {
  return (
    <>
      <ToastContainer />
      <CssBaseline />
      <Header />
      <Listings />
    </>
  )
}

export default App
