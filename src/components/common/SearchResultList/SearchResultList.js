import React from 'react';
import Paginator from '../Paginator/Paginator';
import Alert from '../Alert/Alert';
import {Link, useHistory} from "react-router-dom";
function SearchResultList(props) {
    const { result } = props;

    const history = useHistory()

    const goToUser= (login) => {
        const to = `/${login}`
        history.push(to)
    }


    if(result.total_count > 0) {
        return (<React.Fragment>
            <div className="row">
                <div className="col-md-12 mt-4 text-center">
                    <b>Resultados Encontrados:</b> {result.total_count}
                </div>
                <div className="col-md-12">
                    <hr />
                </div>
            </div>
            <div className="row justify-content-around">
                {result.items && result.items.length > 0 && result.items.map((item) =>
                   <div className="card card-button mb-3 p-2 shadow-sm col-md-5" key={item.id}>
                        <div className="row g-0 justify-content-around">
                            <div className="col-md-3"  onClick={() => goToUser(item.login)}>
                                <img src={item.avatar_url} alt="Avatar Usuário" className="rounded-circle" height="100" />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"  onClick={() => goToUser(item.login)}>{item.login}</h5>
                                    <Link to={"/"+item.login+"/repos"}><button type="button" className="btn btn-primary btn-sm">Repositórios</button></Link>
                                    {' '}
                                    <Link to={"/"+item.login+"/starred"}><button type="button" className="btn btn-secondary btn-sm">Mais Visitados</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Paginator totalPages={result.total_count/30}/>
        </React.Fragment>)
    }
    else if(result.total_count === 0) return (<Alert message="Nenhum usuário encontrado com este login" type="warning" />);
    return ( <p className="lead mt-4">Digite um nome de usuário do github no campo acima.</p>);
    
}


export default SearchResultList;