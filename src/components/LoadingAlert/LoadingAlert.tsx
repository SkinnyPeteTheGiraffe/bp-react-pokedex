import React, { FC } from 'react';
import { Container } from '@material-ui/core';
import LoadingIndicator, { LoadingIndicatorProps } from 'react-loading-indicator';

const LoadingAlert: FC<LoadingIndicatorProps> = props => {
    return (
        <Container fixed>
            <div className="my-auto">
                <LoadingIndicator {...props} />
            </div>
        </Container>
    );
};

export default LoadingAlert;
