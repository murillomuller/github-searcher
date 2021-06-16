import React, { useEffect, useState } from 'react';
import Profile from '../../common/Profile/Profile';
import BackButton from '../../common/BackButton/BackButton';
import api from "../../../services/api";

function User(props) {
    const [user, setUser] = useState({})
    const { match } = props;

    useEffect(() => {
        document.title = `${match.params.user} | Compasso UOL`;

        function getUser(userlogin) {
            api.get("users/" + userlogin)
                .then((response) => setUser(response.data))
                .catch((err) => {
                    console.error("Can't load an error ocurred" + err);
                });
    
        }

        getUser(match.params.user)
    }, [match.params.user]);

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 mt-3">
                    <BackButton />
                </div>
            </div>
            <Profile user={user} />
        </div>
    )
}


export default User;