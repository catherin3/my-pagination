import React from 'react';
import  Axios1 from './Component/Axios';
//import Pag from './Component/Pag';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pokemon from './Component/Pokedex';

const App = (props) => {


  return (
    <Router>
      <Switch>   
        <>
            <Route exact path="/home" render={(props) => <Axios1 {...props} />} />
            <Route
              exact
              path="/:pokemonId"
              render={(props) => <Pokemon {...props} />}
            />
        </>
        </Switch>

    </Router>

  );
}

export default App;