import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Actions, ThunkCreator, useStoreActions } from 'easy-peasy';

import PokedexAppBar from '../../components/PokedexAppBar';
import { StoreModel } from '../../store/models/store';
import PokemonList from '../../components/PokemonList';
import PokemonDetails from '../../components/PokemonDetails';
import PokedexPokemon from '../../objects/PokedexPokemon';

const App = () => {
    const location = useLocation();
    const setCurrentPokemon = useStoreActions(
        (actions: Actions<StoreModel>) => actions.pokemon.setCurrent
    );
    const fetchPokemon = useStoreActions<
        Actions<StoreModel>,
        ThunkCreator<any, Promise<PokedexPokemon[]>>
    >((actions: Actions<StoreModel>) => actions.pokemon.fetch);
    useEffect(() => {
        fetchPokemon(undefined)
            .then((data) => {
                const { pathname } = location;
                if (pathname.includes('/pokedex')) {
                    const raw = pathname.replace('/pokedex/', '');
                    if (raw && raw.length > 0) {
                        const id = parseInt(raw);
                        if (id > 0 && id <= 151) {
                            const current = data.find((p) => p.id === id);
                            if (current) {
                                setCurrentPokemon(current);
                            }
                        }
                    }
                }
            })
            .catch((err: Error) => console.error(err)); // Could use better error reporting
    }, [location, fetchPokemon, setCurrentPokemon]);
    return (
        <>
            <PokedexAppBar />
            <Switch>
                <Route path="/pokedex/">
                    <PokemonDetails />
                </Route>
                <Route path="/">
                    <PokemonList />
                </Route>
            </Switch>
        </>
    );
};

export default App;
