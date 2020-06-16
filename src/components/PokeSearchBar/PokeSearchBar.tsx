import React, { ChangeEvent, FC, useState } from 'react';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import PokedexPokemon from '../../objects/PokedexPokemon';
import { TextField } from '@material-ui/core';

export type PokeSearchBarProps = {
    data: PokedexPokemon[];
};

const PokeSearchBar: FC<PokeSearchBarProps> = ({
    data,
}) => {
    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                id="free-solo-demo"
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                style={{ width: 300 }}
                freeSolo
                options={data.map(d => d.name)}
                renderInput={(params) => (
                    <TextField style={{ paddingLeft: 45 }} {...params} variant="standard" />
                )}
                onChange={(event, value) => {
                    console.log(value)
                }}
            />
        </div>
    );
};

export default PokeSearchBar;
