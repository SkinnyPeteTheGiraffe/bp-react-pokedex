import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PokedexPokemon from '../../objects/PokedexPokemon';
import { TextField } from '@material-ui/core';
import _ from 'lodash';
import { useStyles } from '../PokedexAppBar/PokedexAppBar.styles';

export type PokeSearchBarProps = {
    data: PokedexPokemon[],
    setDisplay: Dispatch<SetStateAction<PokedexPokemon[]>>;
};

const PokeSearchBar: FC<PokeSearchBarProps> = ({
    data,
    setDisplay
}) => {
    const handleUpdate = (input?: string) => {
        if (input && input.length > 0) {
            setDisplay(data.filter(d => d.name.toLowerCase().search(input.toLowerCase()) >= 0))
        } else {
            setDisplay(data)
        }
    };
    const [value, setValue] = useState('');
    const classes = useStyles();
    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                style={{ width: 300 }}
                freeSolo
                options={data.map(d => d.name)}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search Pokédex"
                        margin="normal"
                        variant="outlined"
                    />
                )}
                onInput={(event: FormEvent<HTMLInputElement>) => {
                    const target = event.target as HTMLInputElement;
                    handleUpdate(target?.value);
                }}
                onChange={(event, value) => {
                    if (!value) {
                        handleUpdate();
                    }
                    // TODO Redirect To Details Page
                }}
            />
        </div>
    );
};

export default PokeSearchBar;
