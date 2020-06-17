import { PokemonType } from '../types/PokemonType';
import { ToggleFilter } from '../types/ToggleFilter';
import PokedexPokemon from '../objects/PokedexPokemon';

export const getColorForType = (type: PokemonType): string => {
    switch (type) {
        case PokemonType.Normal:
            return '#CA98A7';
        case PokemonType.Fighting:
            return '#EF6138';
        case PokemonType.Flying:
            return '#93B2C7';
        case PokemonType.Poison:
            return '#9B69D9';
        case PokemonType.Ground:
            return '#6E491F';
        case PokemonType.Rock:
            return '#8B3E21';
        case PokemonType.Bug:
            return '#3B9950';
        case PokemonType.Ghost:
            return '#906790';
        case PokemonType.Fire:
            return '#FD4C5A';
        case PokemonType.Water:
            return '#86A8FC';
        case PokemonType.Grass:
            return '#27CB4F';
        case PokemonType.Electric:
            return '#d1c724';
        case PokemonType.Psychic:
            return '#F81C91';
        case PokemonType.Ice:
            return '#82dffa';
        case PokemonType.Dragon:
            return '#61CAD9';
    }
};

/**
 * Filter function which can be used for filtering both
 * Pokemon types and weaknesses. This method uses a strict
 * filter, meaning if once filter returns false, the entry
 * will be excluded. This can be reversed by simpling replacing
 * every() with some(), which will then allowing if any match to
 * keep the entry.
 *
 * @param mode the mode of filtering, weakness or type
 * @param filters to apply to the dataset
 */
export const pokemonFilter = (
    mode: 'type' | 'weakness',
    filters: ToggleFilter<PokemonType>[]
) => (pokemon: PokedexPokemon): boolean => {
    const data = mode === 'weakness' ? pokemon.weaknesses : pokemon.type;
    return data.every((type) => {
        return filters.some(
            (s) =>
                ((mode === 'weakness' && s.weaknessEnabled) || s.typeEnabled) &&
                s.type === type
        );
    });
};