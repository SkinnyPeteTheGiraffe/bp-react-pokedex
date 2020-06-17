import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: 75
        },
        backContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1
        },
        paper: {
            [theme.breakpoints.down('xs')]: {
                height: '100vh'
            },
            minHeight: 400,
            minWidth: 350,
            maxWidth: 600,

            position: 'relative'
        },
        control: {
            padding: theme.spacing(2),
        },
        container: {
            paddingTop: theme.spacing(2)
        },
        evolutions: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 130
        },
        evolutionGridWrapper: {
            width: '100%',
            height: 150
        },
        evolutionGrid: {
            marginBottom: theme.spacing(2)
        }
    }),
);
