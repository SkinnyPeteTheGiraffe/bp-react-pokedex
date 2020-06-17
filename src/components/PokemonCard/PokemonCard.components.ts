import styled from 'styled-components';
import { Chip } from '@material-ui/core';
import Color from 'color';

export type PokemonColorProps = {
    theme: string;
};

export const PokemonTypeChip = styled(Chip)<PokemonColorProps>`
    height: 15px;
    margin-right: 5px;
    margin-bottom: 5px;
    background: ${(props) => props.theme};
    color: #fafafa;
    font-weight: 400;
    font-size: 12px;
    text-shadow: 1px 1px 5px #2d2d2d;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;

export const PokemonImageContainer = styled.div<PokemonColorProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
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
