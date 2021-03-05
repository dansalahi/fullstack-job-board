import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Avatar } from '@material-ui/core'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(4),
            },
            flexGrow: 1,
        },
        large: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    }),
);

export default function AvatarList() {

    const classes = useStyles();

    const google = process.env.PUBLIC_URL + '/assets/logos/google.png'
    const facebook = process.env.PUBLIC_URL + '/assets/logos/facebook.png'
    const slack = process.env.PUBLIC_URL + '/assets/logos/slack.png'

    return (
        <div className={classes.root}>
            <Avatar alt="Google" src={google} className={classes.large} />
            <Avatar alt="Facebook" src={facebook} className={classes.large} />
            <Avatar alt="Slack" src={slack} className={classes.large} />
        </div>
    )
}







