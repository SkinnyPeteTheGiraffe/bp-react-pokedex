import React, { FC } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { getColorForType } from '../../utils/pokemonUtils';
import { useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PokemonImageContainer } from './PokemonEvolutionCard.components';
import { useStyles } from './PokemonEvolutionCard.styles';
import LoadingAlert from '../LoadingAlert';
import { Actions, useStoreActions } from 'easy-peasy';
import { StoreModel } from '../../store/models/store';
import { PokemonCardProps } from '../PokemonCard/PokemonCard';

const PokemonEvolutionCard: FC<PokemonCardProps> = ({ pokemon }) => {
    const setCurrent = useStoreActions(
        (actions: Actions<StoreModel>) => actions.pokemon.setCurrent
    );
    const history = useHistory();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea
                onClick={() => {
                    setCurrent(pokemon);
                    history.push(`/pokedex/${pokemon.id}`);
                }}
            >
                <PokemonImageContainer theme={getColorForType(pokemon.type[0])}>
                    <LazyLoadImage
                        alt={pokemon.name}
                        height={80}
                        src={pokemon.img} // use normal <img> attributes as props
                        width={80}
                        placeholder={<LoadingAlert segmentWidth={24} />}
                    />
                    <h4> {('' + pokemon.num).padStart(3, '0')}</h4>
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
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PokemonEvolutionCard;
