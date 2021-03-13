import { Typography } from "@material-ui/core";
// styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

    header: {
        flexGrow: 1,
        fontSize: '2rem',
        fontWeight: 'bold',
        color: "#2c3e50"
    },

}))

const ListingHeader: React.FC = () => {
    const classes = useStyles()
    return (
        <Typography variant="h2" align="left" noWrap className={classes.header}>
            Latest Jobs
        </Typography>
    );
}

export default ListingHeader;