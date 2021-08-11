import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Repos } from './pages';

const App = () => {

    return (
        <Switch>
            <Route path = '/:username'>
                <Repos/>
            </Route>
            <Route path = '/'>
                <Home/>
            </Route>
        </Switch>
    )
}

export default App;