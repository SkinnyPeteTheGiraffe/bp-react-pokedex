import React, { FC } from 'react';
import { Container } from '@material-ui/core';
import LoadingIndicator, { LoadingIndicatorProps } from 'react-loading-indicator';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }),
);

const LoadingAlert: FC<LoadingIndicatorProps> = props => {
    const classes = useStyles();
    return (
        <Container fixed className={classes.root}>
            <div className="my-auto">
                <LoadingIndicator {...props} />
            </div>
        </Container>
    );
};

export default LoadingAlert;
