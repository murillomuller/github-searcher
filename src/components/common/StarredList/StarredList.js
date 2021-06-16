import React from 'react';

function StarredList(props) {


    return (
        <React.Fragment>
            <hr/>
            {props.userStarred && props.userStarred.map((starred) =>
                <div className="card text-dark bg-light mb-3" key={starred.id} >
                    <div className="card-header">{starred.full_name}</div>
                    <div className="card-body">
                        <h5 className="card-title">{starred.name}</h5>
                        <p className="card-text">{starred.description}</p>
                    </div>
                </div>)}
        </React.Fragment>
    )

}

export default StarredList;