import { makeStyles, createStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() =>
    createStyles({
        card: {
            height: 380,
            width: 320,
        },
        pokemonName: {
            marginBottom: 0
        }
    }),
);
