import { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, IconButton, Collapse } from '@material-ui/core'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'

// import FixedVideo from './../video/video'

// Navbar todo: set navbar sticky on scroll
import Navbar from './navbar'

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    objectFit: 'contain',
    boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.2)',
  },

  headerTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#050931',
    textShadow: '0px 1px 1px #050931',
  },

  headerSubtitle: {
    fontSize: '2rem',
    color: '#050931',
    padding: '1rem 2rem',
  },

  container: {
    textAlign: 'center',
  },
  expandMore: {
    color: '#d35400',
    fontSize: '5rem',
  },
}))

export default function Header() {
  const classes = useStyles()

  const [check, setCheck] = useState(false)

  useEffect(() => {
    setCheck(true)
  }, [])

  return (
    <header className={classes.header}>
      {/* <FixedVideo /> */}
      {/* <Navbar /> */}
      <Collapse
        in={check}
        collapsedHeight={50}
        {...(check ? { timeout: 1000 } : {})}
      >
        <div className={classes.container}>
          <Typography
            className={classes.headerTitle}
            variant="h1"
            align="center"
            gutterBottom
            noWrap
          >
            10,253, Job Listed Here!
          </Typography>
          <Typography
            className={classes.headerSubtitle}
            align="center"
            gutterBottom
            noWrap
          >
            Your dream job is waiting
          </Typography>
          <IconButton>
            <ExpandMoreIcon className={classes.expandMore} />
          </IconButton>
        </div>
      </Collapse>
    </header>
  )
}
