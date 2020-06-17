import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useStoreActions, Actions } from 'easy-peasy';

import PokedexAppBar from '../../components/PokedexAppBar';
import { StoreModel } from '../../store/models/store';
import PokemonList from '../../components/PokemonList';
import { Container, Grid } from '@material-ui/core';
import ToggleChip from '../../components/ToggleChip';

const App = () => {
    const location = useLocation();
    const fetchPokemon = useStoreActions(
        (actions: Actions<StoreModel>) => actions.pokemon.fetch
    );

    useEffect(() => {
        fetchPokemon().catch((err: Error) => console.error(err)); // TODO Better error reporting
    }, [fetchPokemon]);
    return (
        <div className="h-100">
            <PokedexAppBar />
            <Switch>
                <Route path="/">
                    <PokemonList />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
