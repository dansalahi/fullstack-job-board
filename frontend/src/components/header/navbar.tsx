import { Typography, Toolbar, AppBar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { Sort as SortIcon } from '@material-ui/icons'

// styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

    appbar: {
        background: 'none',
    },

    toolbar: {
        width: '70%',
        margin: '0 auto'
    },

    title: {
        flexGrow: 1,
        fontSize: '2rem',
        fontWeight: 'bold',
        color: "#2c3e50"
    },

    icon: {
        color: "#fff",
        fontSize: "2rem"
    },


}))



const Navbar: React.FC = () => {

    const classes = useStyles()
    return (
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} variant="h1" align="left" noWrap>
                    JobListing.
                </Typography>
                <IconButton >
                    <SortIcon className={classes.icon} />
                </IconButton>
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;