import React, { useEffect, useState } from 'react';
import Profile from '../../common/Profile/Profile';
import BackButton from '../../common/BackButton/BackButton';
import StarredList from '../../common/StarredList/StarredList';
import Loading from '../../common/Loading/Loading';
import api from "../../../services/api";

function Starred(props) {
    const [starredUser, setStarredUser] = useState({})
    const [user, setUser] = useState({})
    const [loadingStarred, setLoadingStarred] = useState(true);
    const { match } = props;

    useEffect(() => {
        document.title = `${match.params.user} | Compasso UOL`;

        function getUserStarred(userlogin) {
            api.get("users/" + userlogin + "/starred")
                .then((response) => {
                    setStarredUser(response.data)
                    setLoadingStarred(false)
                })
                .catch((err) => {
                    console.error("Can't load an error ocurred" + err);
                });
    
        }
        function getUser(userlogin) {
            api.get("users/" + userlogin)
                .then((response) => setUser(response.data))
                .catch((err) => {
                    console.error("Can't load an error ocurred" + err);
                });
    
        }

        getUser(match.params.user)
        getUserStarred(match.params.user)
    }, [match.params.user]);


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 mt-3">
                    <BackButton />
                </div>
            </div>
            <Profile user={user} />
            <Loading loading={loadingStarred}>
                <StarredList userStarred={starredUser}/>
            </Loading>
        </div>
    )
}


export default Starred;