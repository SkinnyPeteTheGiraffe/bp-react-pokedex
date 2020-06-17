import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: theme.spacing(10),
            padding: theme.spacing(1, 0, 0,0)
        },
        filters: {
            margin: theme.spacing(2, 0)
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        subtitle: {
            color: '#fafafa',
            padding: theme.spacing(0, 5),
            marginBottom: theme.spacing(1)
        },
        media: {
            height: 200,
        },
        control: {
            padding: theme.spacing(2),
        }
    }),
);
