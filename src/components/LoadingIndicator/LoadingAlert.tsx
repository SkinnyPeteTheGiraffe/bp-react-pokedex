import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import LoadingIndicator, { LoadingIndicatorProps } from 'react-loading-indicator';

const LoadingAlert: FC<LoadingIndicatorProps> = props => {
    return (
        <Container className="d-flex justify-content-center align-items-center h-100">
            <div className="my-auto">
                <LoadingIndicator {...props} />
            </div>
        </Container>
    );
};

export default LoadingAlert;
