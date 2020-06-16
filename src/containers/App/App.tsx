import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStoreActions, Actions } from 'easy-peasy';

import PokedexAppBar from '../../components/PokedexAppBar';
import { StoreModel } from '../../store/models/store';
import PokemonList from '../../components/PokemonList';

const App = () => {
    const fetchPokemon = useStoreActions(
        (actions: Actions<StoreModel>) => actions.pokemon.fetch
    );

    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon]);
    return (
        <Router>
            <div className="h-100">
                <PokedexAppBar />
                <Switch>
                    <Route path="/">
                        <PokemonList />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
