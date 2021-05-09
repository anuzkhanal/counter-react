import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import ReduxMain from './Component/Redux/ReduxMain';
import Counter from './Component/CounterApp';

function App() {
  return (
    <BrowserRouter>
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/ReduxMain'>
            <ReduxMain />
          </Route>
          <Route exact path='/CounterApp'>
            <Counter />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
