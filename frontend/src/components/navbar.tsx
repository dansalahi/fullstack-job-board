import { Typography, Toolbar, AppBar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import WorkIcon from '@material-ui/icons/Work'


const Navbar: React.FC = () => {
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <WorkIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Job Board App
                </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;