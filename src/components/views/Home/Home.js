import React, { useState, useEffect } from 'react';
import SearchField from '../../common/SearchField/SearchField';
import SearchResultList from '../../common/SearchResultList/SearchResultList';
import Loading from '../../common/Loading/Loading';
import Alert from '../../common/Alert/Alert';
import api from '../../../services/api';

function Home(props) {
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [error, setError] = useState(null);
    const [searchResult, setSearchResult] = useState({});

    const { match, history } = props;

    useEffect(() => {
        document.title = `Busca | Compasso UOL`;
        if (match.params.querystring) {
            searchUser(match.params.querystring)
        }
    }, [match.params.page, match.params.querystring]);


    function searchUser(searchField, resetSearch=false) {
        setError(null)
        setLoadingSearch(true)
        setSearchResult({})
        let route = `/search/${searchField}`;
        let searchRouteApi = "search/users?q=" + searchField
        if (match.params.page > 0 && !resetSearch) {
            route = `${route}/${match.params.page}`;
            searchRouteApi = `${searchRouteApi}&page=${match.params.page}`;
        }
        history.replace({ pathname: route })

        api.get(searchRouteApi)
            .then((response) => {
                setSearchResult(response.data)
                setLoadingSearch(false)
            })
            .catch((err) => {
                setLoadingSearch(false)
                setError(err)
            });

    }
    return (
        <React.Fragment>
            <div className="px-4 py-5 my-5 text-center">

                <h1 className="display-5 fw-bold">COMPASSO</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Ferramenta de busca utilizando a api do github.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <SearchField searchFunction={(searchField) => searchUser(searchField, true)} />
                    </div>
                </div>
                <Loading loading={loadingSearch}>
                    <SearchResultList result={searchResult} />
                </Loading>
                <Alert message={error} type="error" />
            </div>
        </React.Fragment>
    );
}



export default Home;