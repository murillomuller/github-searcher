import React from 'react';

function Alert(props) {


    if (props.message) {
        switch (props.type) {
            case "error":
                return <div className="alert alert-danger mt-4">
                    {props.message}
                </div>
            case "warning":
                return <div className="alert alert-warning mt-4">
                    {props.message}
                </div>
            default:
                return <div className="alert alert-primary mt-4">
                    {props.message}
                </div>
        }
    }
    return null;

}

export default Alert;