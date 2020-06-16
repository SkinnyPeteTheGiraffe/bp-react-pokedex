import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        media: {
            height: 200,
        },
        control: {
            padding: theme.spacing(2),
        }
    }),
);
