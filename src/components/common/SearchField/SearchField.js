import React, { useState } from 'react';

function SearchField(props){
        const [searchField, setSearchField] = useState("");
        
        return (
            <React.Fragment>
                <div className="col-xs-12 col-sm-12 col-8 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input type="search" onChange={(event) => setSearchField(event.target.value)} value={searchField} className="form-control form-control-dark" placeholder="Buscar..." />
                </div>

                <div className="text-end">
                    <button type="button" className="btn btn-warning btn-search" onClick={() => searchField.length === 0 ? {} :props.searchFunction(searchField)}>Buscar</button>
                </div>
            </React.Fragment>
        );
}

export default SearchField;