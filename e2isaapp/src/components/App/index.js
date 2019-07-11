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
import SomeComp from '../SomeComp';
import PersonPage from '../Persons';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () =>(
    <Router>
    <div>
        <Navigation/>
        <Route path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.ADMIN} component={Admin} />
        <Route path={ROUTES.SOME_COMP} component={SomeComp} />
        <Route path={ROUTES.PERSONS} component={PersonPage} />
        
    </div>
    </Router>
);

export default withAuthentication(App);
