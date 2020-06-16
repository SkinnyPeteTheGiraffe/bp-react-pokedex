import { PokemonType } from './PokemonType';
import { PokemonEvolution } from './PokemonEvolution';
import { Measurement } from './Measurement';

/**
 * A definition of a Pokemon as defined by Pokemon GO
 * REST API response. Contains generic types so that it
 * can be used both for raw and parsed data.
 *
 * @param T number type, can be string or number
 * @param M measurement type, can be string or {@link Measurement}
 *
 * @author Bobby Plunkett
 * @version 1.0.0
 */
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