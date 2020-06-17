import React, { FC } from 'react';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import { getColorForType } from '../../utils/pokemonUtils';
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PokemonImageContainer, PokemonTypeChip } from './PokemonCard.components';
import PokedexPokemon from '../../objects/PokedexPokemon';
import { useStyles } from './PokemonCard.styles';
import LoadingAlert from '../LoadingAlert';
import { Actions, useStoreActions } from 'easy-peasy';
import { StoreModel } from '../../store/models/store';

export type PokemonCardProps = {
    pokemon: PokedexPokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
    const setCurrent = useStoreActions(
        (actions: Actions<StoreModel>) => actions.pokemon.setCurrent
    );
    const history = useHistory();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea onClick={() => {
                setCurrent(pokemon);
                history.push(`/pokedex/${pokemon.id}`);
            }}>
                <PokemonImageContainer
                    theme={getColorForType(
                        pokemon.type[0]
                    )}
                >
                    <LazyLoadImage
                        alt={pokemon.name}
                        height={175}
                        src={pokemon.img} // use normal <img> attributes as props
                        width={175}
                        placeholder={<LoadingAlert segmentWidth={24} />}
                    />
                    <h4>
                        {' '}
                        {('' + pokemon.num).padStart(
                            3,
                            '0'
                        )}
                    </h4>
                </PokemonImageContainer>
                <CardContent>
                    <Typography
                        className={classes.pokemonName}
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        {pokemon.name}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body2"
                        component="h4"
                    >
                        Pokémon Type
                    </Typography>
                    <Grid>
                        {pokemon.type.map((t) => (
                            <PokemonTypeChip
                                key={t.toLowerCase()}
                                theme={getColorForType(
                                    t
                                )}
                                label={t}
                            />
                        ))}
                    </Grid>
                    <Typography
                        gutterBottom
                        variant="body2"
                        component="h4"
                    >
                        Weaknesses
                    </Typography>
                    <Grid>
                        {pokemon.weaknesses.map((t) => (
                            <PokemonTypeChip
                                key={t.toLowerCase()}
                                theme={getColorForType(
                                    t
                                )}
                                label={t}
                            />
                        ))}
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PokemonCard;
