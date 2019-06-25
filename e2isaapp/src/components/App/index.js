import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Admin from '../Admin';
import Landing from '../Landing';
import Home from '../Home'
//import PasswordChange from '../PasswordChange';
import PasswordForget from '../PasswordForget';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
//import SignOut from '../SignOut';
import Account from '../Account';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
    <div>
        <Navigation/>
        <hr/>
        
        <Route path={ROUTES.LANDING} render={props => <Landing {...props} />} />
        <Route path={ROUTES.SIGN_UP} render={props => <SignUp {...props} />} />
        <Route path={ROUTES.SIGN_IN} render={props => <SignIn {...props} />} />
        <Route path={ROUTES.PASSWORD_FORGET} render={props => <PasswordForget {...props} />} />
        <Route path={ROUTES.HOME} render={props => <Home {...props} />} />
        <Route path={ROUTES.ACCOUNT} render={props => <Account {...props} />} />
        <Route path={ROUTES.ADMIN} render={props => <Admin {...props} />} />
        
        
    </div>
    </Router>
);

export default App;