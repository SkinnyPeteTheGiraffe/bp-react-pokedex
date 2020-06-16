import { Pokemon } from '../types/Pokemon';
import { PokemonList } from '../types/PokemonList';
import Transformer from '../utils/transformer';

/**
 * Simplistic service to retrieve Pokedex data JSON
 * via fetch methods. While axios is a option, being
 * so simple fetch suffices.
 *
 * @param callback the function to be called upon successful response
 */
export const fetchPokedexData: (
    callback: (input: PokemonList<string, string>) => void
) => void = async (callback) => {
    const url = process.env.REACT_APP_POKEDEX_URL;
    if (!url || url.length <= 0) {
        return [];
    }
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
    })
        .then(async d => {
            const json = await d.json();
            callback(Transformer.fetch(json) as PokemonList<string, string>)

        })
        .catch((err) => {
            console.error(err); // TODO Add better error reporting
        });
};
