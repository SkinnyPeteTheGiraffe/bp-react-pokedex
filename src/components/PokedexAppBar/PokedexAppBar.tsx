import React, { Dispatch, FC, SetStateAction } from 'react';
import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './PokedexAppBar.styles';
import PokeSearchBar from '../PokeSearchBar/PokeSearchBar';
import PokedexPokemon from '../../objects/PokedexPokemon';

type PokedexAppBarProps = {
    data: PokedexPokemon[],
    setDisplay: Dispatch<SetStateAction<PokedexPokemon[]>>;
};

const PokedexAppBar: FC<PokedexAppBarProps> = ({ data, setDisplay }) => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="default" className={classes.root}>
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    {process?.env?.REACT_APP_NAME || 'Pokédex'}
                </Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
                    <PokeSearchBar setDisplay={setDisplay} data={data} />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default PokedexAppBar;