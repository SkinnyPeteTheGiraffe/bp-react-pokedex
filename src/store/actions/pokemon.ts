import { action, computed, thunk } from 'easy-peasy';
import service from '../services/pokemon';
import { PokemonModel } from '../models/pokemon';
import PokedexPokemon from '../../objects/PokedexPokemon';
import { StoreModel } from '../models/store';
import { ToggleFilter } from '../../types/ToggleFilter';
import { PokemonType } from '../../types/PokemonType';
import { pokemonFilter } from '../../utils/pokemonUtils';

export default {
    display: computed<PokemonModel, PokedexPokemon[], StoreModel, []>(
        (state) => {
            return (
                state.list
                    .filter(
                        (d) =>
                            !state.searchTerm ||
                            state.searchTerm.length <= 0 ||
                            d.name
                                .toLowerCase()
                                .search(state.searchTerm.toLowerCase()) >= 0
                    )
                    // Filter objects based on Pokemon types
                    .filter(pokemonFilter('type', state.filters))
                    // Filter objects based  on Pokemon weaknesses
                    .filter(pokemonFilter('weakness', state.filters))
            );
        }
    ),
    toggleFilter: action<PokemonModel, ToggleFilter<PokemonType>>(
        (state, payload) => {
            for (let x = 0; x < state.filters.length; x++) {
                const filter = state.filters[x];
                if (filter.type === payload.type) {
                    const filter = state.filters[x];
                    if (payload.typeEnabled !== 'skip') {
                        filter.typeEnabled = payload.typeEnabled;
                    }
                    if (payload.weaknessEnabled !== 'skip') {
                        filter.weaknessEnabled = payload.weaknessEnabled;
                    }
                    state.filters[x] = filter;
                    break;
                }
            }
        }
    ),
    fetch: thunk<
        PokemonModel,
        void,
        any,
        StoreModel,
        Promise<PokedexPokemon[]>
    >(async (actions) => {
        const data = await service.fetch();
        if (data && data.pokemon && data.pokemon.length > 0) {
            let pokemon = data.pokemon.map((p) => new PokedexPokemon(p));
            actions.set(pokemon);
            return pokemon;
        }
        return [];
    }),
    setCurrent: action<PokemonModel, PokedexPokemon>((state, payload) => {
        state.current = payload;
    }),
    set: action<PokemonModel, PokedexPokemon[]>((state, payload) => {
        state.list = payload;
    }),
    updateSearchTerm: action<PokemonModel, string>((state, payload) => {
        state.searchTerm = payload;
    }),
};
