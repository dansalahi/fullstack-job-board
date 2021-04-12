import { Typography } from "@material-ui/core";
// styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#2c3e50",
    padding: "1rem 2rem",
  },
}));

const ListingHeader: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography variant="h2" align="left" noWrap className={classes.header}>
      Latest Jobs
    </Typography>
  );
};

export default ListingHeader;
