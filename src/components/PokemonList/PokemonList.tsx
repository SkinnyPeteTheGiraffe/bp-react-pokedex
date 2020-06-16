import React, { useEffect, useState } from 'react';
import { fetchPokedexData } from '../../services';
import PokedexPokemon from '../../objects/PokedexPokemon';

const PokemonList = () => {
    const [data, setData] = useState([] as PokedexPokemon[]);
    useEffect(() => {
        fetchPokedexData(input => {
            const pokemon: PokedexPokemon[] = [];
            input.forEach(p => {
                pokemon.push(new PokedexPokemon(p));
            });
            setData(pokemon);
        });
    }, [data]);
    return (
        <div>
            <h2>{data.length}</h2>
        </div>
    );
};

export default PokemonList;
