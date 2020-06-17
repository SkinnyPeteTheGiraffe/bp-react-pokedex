import { Action, Computed, Thunk } from 'easy-peasy';

import PokedexPokemon from '../../objects/PokedexPokemon';
import actions from '../actions/pokemon';

export interface PokemonModel {
    list: PokedexPokemon[];
    current?: PokedexPokemon;
    searchTerm: string;
    set: Action<PokemonModel, PokedexPokemon[]>;
    setCurrent: Action<PokemonModel, PokedexPokemon>;
    fetch: Thunk<PokemonModel>;
    display: Computed<PokemonModel, PokedexPokemon[]>;
    updateSearchTerm: Action<PokemonModel, string>;
}

const pokemonModel: PokemonModel = {
    list: [],
    current: undefined,
    searchTerm: '',
    ...actions,
};

export default pokemonModel;
