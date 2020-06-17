import React, { FC } from 'react';
import {
    Container,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Grid,
    Typography,
} from '@material-ui/core';
import { useStyles } from './PokemonList.styles';
import PokemonCard from '../PokemonCard';
import { State, useStoreState } from 'easy-peasy';
import { StoreModel } from '../../store/models/store';
import ToggleChip from '../ToggleChip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import _ from 'lodash';

const PokemonList: FC = () => {
    const classes = useStyles();
    const data = useStoreState(
        (state: State<StoreModel>) => state.pokemon.display
    );
    const searchTerm = useStoreState(
        (state: State<StoreModel>) => state.pokemon.searchTerm
    );
    const filters = useStoreState(
        (state: State<StoreModel>) => state.pokemon.filters
    );
    return (
        <Container maxWidth="lg">
            <Grid className={classes.root} spacing={2}>
                <div className={classes.filters}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Filter By Type</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container justify="flex-start" spacing={2}>
                                {filters.map((f) => (
                                    <Grid key={_.kebabCase(f.type).toLowerCase() + Date.now()} item>
                                        <ToggleChip
                                            type="type"
                                            targetType={f.type}
                                            selected={f.typeEnabled === 'skip' ? false : f.typeEnabled}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Filter By Weakness</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container justify="flex-start" spacing={2}>
                                {filters.map((f) => (
                                    <Grid key={_.kebabCase(f.type)} item>
                                        <ToggleChip
                                            type="weakness"
                                            targetType={f.type}
                                            selected={f.weaknessEnabled === 'skip' ? false : f.weaknessEnabled}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                <Grid item xs={12}>
                    <Grid container justify="space-evenly" spacing={2}>
                        {data && data.length > 0 ? (
                            data.map((pokemon) => (
                                <Grid key={pokemon.id} item>
                                    <PokemonCard pokemon={pokemon} />
                                </Grid>
                            ))
                        ) : (
                            <Typography
                                style={{ color: '#fafafa', marginTop: '2em' }}
                                variant="h4"
                                gutterBottom
                            >
                                {searchTerm.length <= 0 &&
                                filters.some((f) => f.typeEnabled || f.weaknessEnabled)
                                    ? 'Loading...'
                                    : `No matching results...`}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PokemonList;
