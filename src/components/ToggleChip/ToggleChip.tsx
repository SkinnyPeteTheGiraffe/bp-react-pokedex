import React, { FC, useState } from 'react';
import { Chip, ChipProps } from '@material-ui/core';

import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import Color from 'color';
import { PokemonType } from '../../types/PokemonType';
import { Actions, useStoreActions } from 'easy-peasy';
import { StoreModel } from '../../store/models/store';
import { getColorForType } from '../../utils/pokemonUtils';

export type StyledToggleChipProps = {
    selected: boolean;
    on: string;
    off: string;
};

export type ToggleChipProps<T> = ChipProps & {
    selected?: boolean;
    targetType: T;
    type: 'type' | 'weakness';
};

const StyledToggleChip = styled(Chip)<StyledToggleChipProps>`
    width: 100px;
    color: #fafafa;
    text-shadow: 1px 1px 5px #2d2d2d;
    background-color: ${(props) => (props.selected ? props.on : props.off)};
    &:focus {
        background-color: ${(props) => (props.selected ? props.on : props.off)};
    }
    &:hover {
        background-color: ${(props) =>
            Color(props.selected ? props.on : props.off)
                .darken(0.15)
                .hex()};
    }
`;

const ToggleChip: FC<ToggleChipProps<PokemonType>> = ({
    type,
    targetType,
    selected,
    ...props
}) => {
    const [checked, setChecked] = useState(selected || false);
    const updateFilter = useStoreActions(
        (actions: Actions<StoreModel>) => actions.pokemon.toggleFilter
    );
    const onClick = () => {
        updateFilter({
            type: targetType,
            typeEnabled: type === 'type' ? !checked : 'skip',
            weaknessEnabled: type === 'weakness' ? !checked : 'skip',
        });
        setChecked(!checked);
    };
    const color = getColorForType(targetType);
    return (
        <StyledToggleChip
            {...props}
            clickable
            label={targetType}
            selected={checked}
            on={color}
            off="#BABABA"
            onClick={onClick}
            onDelete={onClick}
            deleteIcon={checked ? <DoneIcon /> : <CloseIcon />}
        />
    );
};

export default ToggleChip;
