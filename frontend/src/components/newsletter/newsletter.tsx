import { Typography } from '@material-ui/core'
// styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    background: 'linear-gradient(to right, #00b2ff, #0066ff)',
    color: 'var(--white-color)',
    minHeight: '20vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2rem',
  },
  title: {
    fontSize: '2.5rem',
  },
  form: {
    margin: '1rem',
    display: 'flex',
    flexDirection: 'row',
  },
}))

const NewsLetter: React.FC = () => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Typography variant="h2" align="center" noWrap className={classes.title}>
        Subscribe Newsletter & get job news!
      </Typography>
    </section>
  )
}

export default NewsLetter
