import React from 'react';
import { PokemonList } from '../types/PokemonList';

export const fetchPokedexData: () => PokemonList = async () => {
    const url = process.env.REACT_APP_POKEDEX_URL;
    if (!url || url.length <= 0) {
        return [];
    }
    const data = await fetch(url);
}
