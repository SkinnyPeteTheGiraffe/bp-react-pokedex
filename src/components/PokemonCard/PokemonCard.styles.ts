import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
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
