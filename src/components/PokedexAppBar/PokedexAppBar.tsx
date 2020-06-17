import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './PokedexAppBar.styles';
import PokeSearchBar from '../PokeSearchBar/PokeSearchBar';

const PokedexAppBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="default" className={classes.root}>
            <Toolbar>
                <Grid>
                    <Grid item>
                        <Typography className={classes.title} variant="h4" noWrap>
                            {process?.env?.REACT_APP_NAME || 'Pokédex'}
                        </Typography>
                        <Typography className={classes.title} variant="body2" noWrap>
                            Developed by {process?.env?.REACT_APP_AUTHOR || 'Bobby Plunkett'}
                        </Typography>
                    </Grid>
                </Grid>
                <div className={classes.grow} />
                <div className={classes.search}>
                    <PokeSearchBar />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default PokedexAppBar;
