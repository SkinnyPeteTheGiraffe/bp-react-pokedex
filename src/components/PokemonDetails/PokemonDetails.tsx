import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import {
    CardContent,
    Container,
    Divider,
    Grid,
    IconButton,
    Paper,
    Typography,
} from '@material-ui/core';
import { useStyles } from './PokemonDetails.styles';
import { State, useStoreState } from 'easy-peasy';
import { StoreModel } from '../../store/models/store';
import LoadingAlert from '../LoadingAlert';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
    PokemonImageContainer,
    PokemonTypeChip,
} from '../PokemonCard/PokemonCard.components';
import { PokemonDetailsContainer } from './PokemonDetails.components';
import { getColorForType } from '../../utils/pokemonUtils';
import PokemonCard from '../PokemonCard';
import PokemonEvolutionCard from '../PokemonEvolutionCard';
import PokedexPokemon from '../../objects/PokedexPokemon';

export type EvolutionGridProps = {
    evolutions: PokedexPokemon[];
    label: string;
    emptyMessage: string;
};
const EvolutionGrid: FC<EvolutionGridProps> = ({
    evolutions,
    label,
    emptyMessage,
}) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.evolutionGridWrapper}>
            <Grid container spacing={1} className={classes.evolutionGrid}>
                <Grid item xs={12}>
                    <Divider />
                    <Typography variant="h6" component="h5">
                        {label}
                    </Typography>
                </Grid>
                {evolutions.length > 0 ? (
                    evolutions.map((pokemon) => (
                        <Grid key={pokemon.id} item>
                            <PokemonEvolutionCard pokemon={pokemon} />
                        </Grid>
                    ))
                ) : (
                    <Typography
                        style={{ margin: '2em' }}
                        variant="body2"
                        gutterBottom
                    >
                        {emptyMessage}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

const PokemonDetails = () => {
    const history = useHistory();
    const classes = useStyles();
    const pokemon = useStoreState(
        (state: State<StoreModel>) => state.pokemon.list
    );
    const current = useStoreState(
        (state: State<StoreModel>) => state.pokemon.current
    );
    const nextEvolutions =
        current && pokemon && current.nextEvolution.length > 0
            ? pokemon.filter((p) => {
                  return current.nextEvolution.some((c) => {
                      return c.num === p.num;
                  });
              })
            : [];
    const prevEvolutions =
        current && pokemon && current.prevEvolution.length > 0
            ? pokemon.filter((p) => {
                  return current.prevEvolution.some((c) => {
                      return c.num === p.num;
                  });
              })
            : [];

    return current ? (
        <Grid
            container
            className={classes.root}
            justify="center"
            alignItems="center"
        >
            <Paper className={classes.paper} elevation={3}>
                <Grid container>
                    <Grid item xs={12} className={classes.backContainer}>
                        <IconButton
                            color="primary"
                            onClick={() => {
                                history.push('/');
                            }}
                        >
                            <KeyboardBackspaceIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <PokemonDetailsContainer
                            theme={getColorForType(current.type[0])}
                        >
                            <LazyLoadImage
                                alt={current.name}
                                height={300}
                                src={current.img} // use normal <img> attributes as props
                                width={300}
                                placeholder={<LoadingAlert segmentWidth={24} />}
                            />
                            <h4> {('' + current.num).padStart(3, '0')}</h4>
                        </PokemonDetailsContainer>
                    </Grid>
                </Grid>
                <Container className={classes.container}>
                    <Typography variant="h3">{current.name}</Typography>
                    <Grid container justify="space-evenly" spacing={1} style={{ marginBottom: 1 }}>
                        <Grid item>
                            <Typography color="textSecondary" variant="body2">
                                Height:{' '}
                                {`${current.height.value}${current.height.type}`}
                            </Typography>
                        </Grid>
                        <Grid item>
                            |
                        </Grid>
                        <Grid item>
                            <Typography color="textSecondary" variant="body2">
                                Weight:{' '}
                                {`${current.weight.value}${current.weight.type}`}
                            </Typography>
                        </Grid>
                        <Grid item>
                            |
                        </Grid>
                        <Grid item>
                            <Typography color="textSecondary" variant="body2">
                                Egg Size: {current.egg}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Typography gutterBottom variant="body2" component="h4">
                        Pokémon Type
                    </Typography>
                    <Grid>
                        {current.type.map((t) => (
                            <PokemonTypeChip
                                key={t.toLowerCase()}
                                theme={getColorForType(t)}
                                label={t}
                            />
                        ))}
                    </Grid>
                    <Divider />
                    <Typography gutterBottom variant="body2" component="h4">
                        Weaknesses
                    </Typography>
                    <Grid>
                        {current.weaknesses.map((t) => (
                            <PokemonTypeChip
                                key={t.toLowerCase()}
                                theme={getColorForType(t)}
                                label={t}
                            />
                        ))}
                    </Grid>
                    <Grid container>
                        <EvolutionGrid
                            evolutions={nextEvolutions}
                            label="Upcoming Evolutions"
                            emptyMessage="No Further Evolutions"
                        />
                        <EvolutionGrid
                            evolutions={prevEvolutions}
                            label="Previous Evolutions"
                            emptyMessage="No Previous Evolutions"
                        />
                    </Grid>
                </Container>
            </Paper>
        </Grid>
    ) : (
        <LoadingAlert segmentWidth={50} />
    );
};

export default PokemonDetails;
