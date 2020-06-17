import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            height: 420,
            width: 320,
            [theme.breakpoints.up('sm')]: {
                width: 400,
            }
        },
        pokemonName: {
            marginBottom: 0
        }
    }),
);
