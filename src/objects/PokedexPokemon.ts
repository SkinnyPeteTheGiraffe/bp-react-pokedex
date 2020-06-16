import { Pokemon } from '../types/Pokemon';
import { PokemonEvolution } from '../types/PokemonEvolution';
import { PokemonType } from '../types/PokemonType';
import { Measurement } from '../types/Measurement';

/**
 * A implementation of {@link Pokemon} providing
 * functions that allow for parsing of raw
 * data from a response.
 *
 * @author Bobby Plunkett
 * @version 1.0.0
 */
export default class PokedexPokemon implements Pokemon<number, Measurement> {
    public readonly avgSpawns: number;
    public readonly candy: string;
    public readonly candyCount: number;
    public readonly egg: string;
    public readonly height: Measurement;
    public readonly id: number;
    public readonly img: string;
    public readonly multipliers: number[];
    public readonly name: string;
    public readonly nextEvolutions: PokemonEvolution<number>[];
    public readonly num: number;
    public readonly prevEvolutions: PokemonEvolution<number>[];
    public readonly spawnChance: string;
    public readonly spawnTime: string;
    public readonly type: PokemonType[];
    public readonly weakness: PokemonType[];
    public readonly weight: Measurement;

    constructor(pokemon: Pokemon<string, string>) {
        this.id = pokemon.id;
        this.num = parseInt(pokemon.num);
        this.img = pokemon.img;
        this.name = pokemon.name;
        this.avgSpawns = pokemon.avgSpawns;
        this.candy = pokemon.candy;
        this.candyCount = pokemon.candyCount;
        this.multipliers = pokemon.multipliers || [];
        this.egg = pokemon.egg;
        this.height = PokedexPokemon.parseMeasurement(pokemon.height);
        this.weight = PokedexPokemon.parseMeasurement(pokemon.weight);
        this.spawnChance = pokemon.spawnChance;
        this.spawnTime = pokemon.spawnTime;
        this.nextEvolutions = PokedexPokemon.parseEvolution(pokemon.nextEvolutions);
        this.prevEvolutions = PokedexPokemon.parseEvolution(pokemon.prevEvolutions);
        this.type = pokemon.type;
        this.weakness = pokemon.type;
    }

    private static parseMeasurement(input: string): Measurement {
        const split = input ? input.split(' ') : [];
        return (split.length > 0
            ? {
                  type: split[1],
                  value: parseFloat(split[0]),
              }
            : {
                  type: 'NA',
                  value: -1,
              }) as Measurement;
    }

    private static parseEvolution(
        input: PokemonEvolution<string>[]
    ): PokemonEvolution<number>[] {
        return input ? input.map(
            (p) =>
                ({
                    name: p.name,
                    num: parseInt(p.num),
                } as PokemonEvolution<number>)
        ) : [];
    }
}
