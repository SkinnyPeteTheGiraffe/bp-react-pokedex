import { PokemonType } from './PokemonType';
import { PokemonEvolution } from './PokemonEvolution';
import { Measurement } from './Measurement';

export interface Pokemon<T extends (string | number), M extends (string | Measurement)> {
    id: number,
    num: T,
    name: string,
    img: string,
    type: PokemonType[],
    height: M;
    weight: M;
    candy: string;
    candyCount: number;
    egg: string;
    spawnChance: string;
    avgSpawns: number;
    spawnTime: string;
    multipliers: number[],
    weakness: PokemonType[],
    prevEvolutions: PokemonEvolution<T>[],
    nextEvolutions: PokemonEvolution<T>[]
}