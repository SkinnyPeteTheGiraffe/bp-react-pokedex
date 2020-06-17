import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        card: {
            height: 100,
            width: 84,
        },
        pokemonName: {
            marginBottom: 0,
        },
    })
);
