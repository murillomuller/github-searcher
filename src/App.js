import React from 'react';
import {Switch,Route,Link} from "react-router-dom";
import Home from "./components/views/Home/Home";
import User from "./components/views/User/User";
import Repos from "./components/views/Repos/Repos";
import Starred from "./components/views/Starred/Starred";


function App() {

  return (
    <div>
      <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         <h3> Recrutamento</h3>
        </Link>

       
      </div>
    </div>
  </header>
          <Switch>
            <Route exact path="/" component={Home} key={Date.now()} />
            <Route exact path="/search/:querystring/:page?" component={Home} />
            <Route exact path="/:user" component={User} />
            <Route exact path="/:user/starred" component={Starred} />
            <Route exact path="/:user/repos" component={Repos} />
          </Switch>
    </div>
      );
}

      export default App;
