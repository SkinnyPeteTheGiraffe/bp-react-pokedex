import HttpUtil from '../../utils/httpUtil';
import { PokemonList } from '../../types/PokemonList';

export default {
    fetch: () => {
        return new Promise<PokemonList<string, string>>((resolve, reject) => {
            const url = process.env.REACT_APP_POKEDEX_URL;
            if (!url || url.length <= 0) {
                return reject('No URL was specified!');
            }
            fetch(url, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
            })
                .then(async (d) => {
                    const json = await d.json();
                    resolve(
                        HttpUtil.parseResponse<PokemonList<string, string>>(
                            json
                        )
                    );
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};
