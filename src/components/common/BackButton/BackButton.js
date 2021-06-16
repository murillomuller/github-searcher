import React from 'react';
import { useHistory } from "react-router-dom";

function BackButton() {
    let history = useHistory();
    return (<button type="button"  onClick={() => history.goBack()} className="btn btn-warning">Voltar</button>);
}

export default BackButton;