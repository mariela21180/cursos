import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: 'black !important'
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        cursor: 'pointer',
        color: 'white !important'
    }
}))

export default function AppNavigator() {
    const classes = useStyles()

    return (
        <AppBar className={classes.AppBar} position="fixed">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title} variant="h6" color="inherit" component="div">
                        Pokedex
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
