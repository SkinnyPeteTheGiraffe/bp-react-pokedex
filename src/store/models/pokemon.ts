import { Action, Computed, Thunk } from 'easy-peasy';

import PokedexPokemon from '../../objects/PokedexPokemon';
import actions from '../actions/pokemon';
import { PokemonType } from '../../types/PokemonType';
import { ToggleFilter } from '../../types/ToggleFilter';

export interface PokemonModel {
    list: PokedexPokemon[];
    current?: PokedexPokemon;
    searchTerm: string;
    filters: ToggleFilter<PokemonType>[];
    toggleFilter: Action<PokemonModel, ToggleFilter<PokemonType>>;
    set: Action<PokemonModel, PokedexPokemon[]>;
    setCurrent: Action<PokemonModel, PokedexPokemon>;
    fetch: Thunk<PokemonModel>;
    display: Computed<PokemonModel, PokedexPokemon[]>;
    updateSearchTerm: Action<PokemonModel, string>;
}

const pokemonModel: PokemonModel = {
    list: [],
    filters: Object.values(PokemonType).map(e => ({
        typeEnabled: true,
        weaknessEnabled: true,
        type: e as PokemonType
    } as ToggleFilter<PokemonType>)),
    current: undefined,
    searchTerm: '',
    ...actions,
};

export default pokemonModel;
