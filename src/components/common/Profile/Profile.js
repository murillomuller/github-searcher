import React from 'react';
import { Link } from "react-router-dom";

function Profile(props) {
    const { user } = props;

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-2">
                    <img src={user.avatar_url ? user.avatar_url : "/imgs/avatar-img.png"} alt="Avatar Usuário" className="img-thumbnail" />
                    <p className="small-text"><b>{user.following}</b> seguindo - <b>{user.followers}</b> seguidores</p>
                    <p>{user.location}</p>
                </div>
                <div className="col-md-10">
                    <h2>{user.name}</h2>
                    <p className="lead">{user.login}</p>
                    <blockquote className="blockquote">{user.bio}</blockquote>
                    <div className="row">
                        <div className="col-md-12">
                            <Link to={"/" + user.login + "/repos"}><button type="button" className="btn btn-primary btn-md">Repositórios</button></Link>
                            {' '}
                            <Link to={"/" + user.login + "/starred"}><button type="button" className="btn btn-secondary btn-md">Mais Visitados</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Profile;