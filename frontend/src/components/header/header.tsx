import { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, IconButton, Collapse } from '@material-ui/core'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'


// Navbar
import Navbar from './navbar'


const useStyles = makeStyles(theme => ({


    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },

    headerTitle: {
        fontSize: '4.5rem',
        fontWeight: 'bold',
        color: '#30336b',
        textAlign: 'center'
    },

    container: {
        textAlign: 'center'
    },


    expandMore: {
        color: '#d35400',
        fontSize: '5rem'
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
            <Navbar />
            <Collapse in={check} collapsedHeight={50} {...(check ? { timeout: 1000 } : {})} >
                <div className={classes.container}>
                    <Typography className={classes.headerTitle} variant="h1" align="center" gutterBottom noWrap>10,253, Job Listed Here!</Typography>
                    <IconButton>
                        <ExpandMoreIcon className={classes.expandMore} />
                    </IconButton>
                </div>
            </Collapse>
        </header>

    )


}