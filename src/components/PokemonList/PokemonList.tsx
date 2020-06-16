import React, { FC } from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    Typography,
} from '@material-ui/core';
import { useStyles } from './PokemonList.styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import Color from 'color';
import { getColorForType } from '../../utils/pokemonUtils';
import PokedexPokemon from '../../objects/PokedexPokemon';

type PokemonListProps = {
    data: PokedexPokemon[]
};

type PokemonColorProps = {
    theme: string;
};

const PokemonTypeChip = styled(Chip)<PokemonColorProps>`
    height: 15px;
    margin-right: 5px;
    margin-bottom: 5px;
    background: ${props => props.theme};
    color: #fafafa;
    font-weight: 400;
    font-size: 12px;
    text-shadow: 1px 1px 5px #2d2d2d;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;

const PokemonImageContainer = styled.div<PokemonColorProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(
        to bottom,
        ${({ theme }) =>
            `${Color(theme)
                .lighten(0.25)
                .fade(0.75)}, ${theme}, ${Color(theme).darken(0.25)}`}
    );
    h4 {
        position: absolute;
        bottom: 0;
        right: 0;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
        margin: 0 5px 5px 0;
        text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
    }
`;

const PokemonList: FC<PokemonListProps> = ({ data }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {data.map((pokemon) => (
                        <Grid key={pokemon.id} item>
                            <Card className={classes.card}>
                                <CardActionArea>
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
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PokemonList;
