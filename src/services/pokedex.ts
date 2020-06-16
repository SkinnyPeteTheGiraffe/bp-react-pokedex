import { Pokemon } from '../types/Pokemon';

/**
 * Simplistic service to retrieve Pokedex data JSON
 * via fetch methods. While axios is a option, being
 * so simple fetch suffices.
 *
 * @param callback the function to be called upon successful response
 */
export const fetchPokedexData: (
    callback: (input: Pokemon<string, string>[]) => void
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
            const json: any = await d.json();
            if (json.hasOwnProperty('pokemon')) {
                callback(json.pokemon as Pokemon<string, string>[])
            }

        })
        .catch((err) => {
            console.error(err); // TODO Add better error reporting
        });
};
