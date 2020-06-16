import React, { useEffect, useState } from 'react';
import { fetchDataViaUrl } from '../../services';

const PokemonList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (url) {
            fetchDataViaUrl(url, (results) => {
                setData(results)
            });
        }
    }, [data])
    return (
        <div>
            <h2>{url}</h2>
        </div>
    );
};

export default PokemonList;
