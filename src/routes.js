import { Route } from 'react-router-dom';
import React from 'react';
import App from './App';
import UserComponent from './component/user.component';

const Routes = () => {
    return (
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/user' component={UserComponent} />
        </div>
    )
}

export default Routes;