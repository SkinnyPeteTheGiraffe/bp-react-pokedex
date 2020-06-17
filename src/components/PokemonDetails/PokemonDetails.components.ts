import styled from 'styled-components';
import Color from 'color';
import { PokemonColorProps } from '../PokemonCard/PokemonCard.components';

export const PokemonDetailsContainer = styled.div<PokemonColorProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-image: linear-gradient(
        to bottom,
        ${({ theme }) =>
            `${Color(theme).lighten(0.25).fade(0.75)}, ${theme}, ${Color(
                theme
            ).darken(0.25)}`}
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
