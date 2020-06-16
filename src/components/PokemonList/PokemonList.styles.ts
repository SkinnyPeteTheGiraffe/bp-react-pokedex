import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        card: {
            height: 380,
            width: 200,
        },
        media: {
            height: 200,
        },
        control: {
            padding: theme.spacing(2),
        },
        pokemonName: {
            marginBottom: 0
        }
    }),
);