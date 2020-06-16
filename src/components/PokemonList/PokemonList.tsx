import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './PokemonList.styles';
import PokemonCard from '../PokemonCard';
import { State, useStoreState } from 'easy-peasy';
import { StoreModel } from '../../store/models/store';

const PokemonList: FC = () => {
    const classes = useStyles();
    const data = useStoreState(
        (state: State<StoreModel>) => state.pokemon.display
    );
    const searchTerm = useStoreState(
        (state: State<StoreModel>) => state.pokemon.searchTerm
    );
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {data && data.length > 0 ? (data.map((pokemon) => (
                            <Grid key={pokemon.id} item>
                                <PokemonCard pokemon={pokemon} />
                            </Grid>
                        ))) : (
                        <Typography style={{ color: '#fafafa', marginTop: '2em' }} variant="h4" gutterBottom>
                            {searchTerm.length <= 0 ? 'Loading...' : `No matching results for "${searchTerm}"`}
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PokemonList;
