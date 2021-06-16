import React from 'react';

function ReposList(props) {


    return (
        <React.Fragment>
            <hr/>
            {props.userRepos && props.userRepos.map((repo) =>
                <div className="card text-dark bg-light mb-3" key={repo.id}>
                    <div className="card-header">{repo.full_name}</div>
                    <div className="card-body">
                        <h5 className="card-title">{repo.name}</h5>
                        <p className="card-text">{repo.description}</p>
                    </div>
                </div>)}
        </React.Fragment>
    )

}

export default ReposList;