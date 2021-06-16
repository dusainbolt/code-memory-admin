import * as React from 'react';

interface IOwnProps {
    message?: any;
}

export const Loading: React.FC<IOwnProps> = props => {
    return (
        <>
            <div className="loading">
                <small>{props.message ? props.message : 'Loading...'}</small>
            </div>
        </>
    );
};
