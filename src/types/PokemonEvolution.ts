/**
 * A definition of a Pokemon Evolution state. This
 * state is stored within each Pokemon type, and
 * defines both next and previous evolution steps.
 *
 * @param N the number types, can be string or number
 *
 * @author Bobby Plunkett
 * @version 1.0.0
 */
export interface PokemonEvolution<N extends string | number> {
    num: N;
    name: string;
}
