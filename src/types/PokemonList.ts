import { Pokemon } from './Pokemon';
import { Measurement } from './Measurement';

/**
 * A definition of the expected response of the Pokemon GO
 * Data REST JSON.
 *
 * @param T number type, can be string or number
 * @param M measurement type, can be string or {@link Measurement}
 *
 * @author Bobby Plunkett
 * @version 1.0.0
 */
export interface PokemonList<
    T extends string | number,
    M extends string | Measurement
> {
    pokemon: Pokemon<T, M>[];
}
