import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Home';
import Repositories from './Repositories';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* será chamado quando o endereço da página for apenas http://localhost:3000/, página principal */}
        <Route path="/" exact component={Home}/> {/* exact informa que queremos o componente exatamente com a "/" e não algo que começa com a "/" */}

        {/* será chamado quando o endereço da página for http://localhost:3000/repositories */}
        <Route path="/repositories" component={Repositories}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;