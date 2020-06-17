import { PokemonType } from '../types/PokemonType';

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