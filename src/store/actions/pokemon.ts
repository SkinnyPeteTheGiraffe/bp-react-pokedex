import { action, computed, thunk } from 'easy-peasy';
import service from '../services/pokemon';
import { PokemonModel } from '../models/pokemon';
import PokedexPokemon from '../../objects/PokedexPokemon';
import { StoreModel } from '../models/store';

export default {
    display: computed<PokemonModel, PokedexPokemon[], StoreModel, []>(
        (state) => {
            return state.searchTerm && state.searchTerm.length > 0
                ? state.list.filter(
                      (d) =>
                          d.name
                              .toLowerCase()
                              .search(state.searchTerm.toLowerCase()) >= 0
                  )
                : state.list;
        }
    ),
    fetch: thunk<PokemonModel>(
        async (actions) => {
            const data = await service.fetch();
            if (data && data.pokemon && data.pokemon.length > 0) {
                actions.set(data.pokemon.map((p) => new PokedexPokemon(p)));
            }
        }
    ),
    set: action<PokemonModel, PokedexPokemon[]>((state, payload) => {
        state.list = payload;
    }),
    updateSearchTerm: action<PokemonModel, string>((state, payload) => {
        state.searchTerm = payload;
    }),
};
