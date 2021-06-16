import React, { useEffect, useState } from 'react';
import Profile from '../../common/Profile/Profile';
import Loading from '../../common/Loading/Loading';
import BackButton from '../../common/BackButton/BackButton';
import ReposList from '../../common/ReposList/ReposList';
import api from "../../../services/api";

function Repos(props) {
    const [user, setUser] = useState({})
    const [userRepos, setUserRepos] = useState([])
    const [loadingRepos, setLoadingRepos] = useState(true);
    const { match } = props;

    useEffect(() => {
        document.title = `${match.params.user} | Compasso UOL`;

        function getUserRepos(userlogin) {
            api.get("users/" + userlogin + "/repos")
                .then((response) => {
                    setUserRepos(response.data)
                    setLoadingRepos(false)
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
        getUserRepos(match.params.user)
    }, [match.params.user]);


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 mt-3">
                    <BackButton />
                </div>
            </div>
            <Profile user={user} />
            <Loading loading={loadingRepos}>
                <ReposList userRepos={userRepos}/>
            </Loading>
        </div>
    )
}


export default Repos;