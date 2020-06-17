import React, { ChangeEvent, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid, TextField } from '@material-ui/core';
import { useStyles } from '../PokedexAppBar/PokedexAppBar.styles';
import { Actions, State, useStoreActions, useStoreState } from 'easy-peasy';
import { StoreModel } from '../../store/models/store';

const PokeSearchBar = () => {
    const updateSearchTerm = useStoreActions(
        (actions: Actions<StoreModel>) => actions.pokemon.updateSearchTerm
    );
    const data = useStoreState(
        (state: State<StoreModel>) => state.pokemon.display
    );
    const handleUpdate = (input?: string) => {
        updateSearchTerm(input || '');
    };
    const [value, setValue] = useState('');
    const classes = useStyles();
    return (
        <Grid>
            <Autocomplete
                value={value}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                freeSolo
                options={data.map((d) => d.name)}
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
                onInputChange={(event: ChangeEvent<any>, update: string) => {
                    handleUpdate(update);
                    setValue(update);
                }}
                onChange={(event, value) => {
                    if (!value) {
                        handleUpdate();
                    }
                }}
            />
        </Grid>
    );
};

export default PokeSearchBar;
