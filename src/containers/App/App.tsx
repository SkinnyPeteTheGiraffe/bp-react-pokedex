import React, { useEffect, useState } from 'react';
import PokemonList from '../../components/PokemonList';
import PokedexAppBar from '../../components/PokedexAppBar';
import PokedexPokemon from '../../objects/PokedexPokemon';
import LoadingAlert from '../../components/LoadingAlert';
import { fetchPokedexData } from '../../services';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<PokedexPokemon[]>([]);
    const [display, setDisplay] = useState<PokedexPokemon[]>([]);
    useEffect(() => {
        setLoading(true);
        fetchPokedexData((input) => {
            if (input && input.pokemon && input.pokemon.length > 0) {
                if (
                    data.length < 1 ||
                    display.length < 1 ||
                    data.length !== input.pokemon.length
                ) {
                    const pokemon: PokedexPokemon[] = [];
                    input.pokemon.forEach((p) => {
                        pokemon.push(new PokedexPokemon(p));
                    });
                    setData(pokemon);
                    setDisplay(data);
                    setLoading(false);
                }
            }
        });
    }, [data]);
    return (
        <div className="h-100">
            <PokedexAppBar setDisplay={setDisplay} data={data}/>
            {loading ? <LoadingAlert segmentWidth={50} /> : <PokemonList data={display} />}
        </div>
    );
};

export default App;
