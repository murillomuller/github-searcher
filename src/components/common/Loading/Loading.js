import React from 'react';

function Loading(props) {

    if (props.loading) {
        return (
            <div className="d-flex justify-content-center mt-4">
                <div className="spinner-border">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)
    }
    return (props.children);

}

export default Loading;