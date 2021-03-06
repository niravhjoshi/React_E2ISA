import React from 'react';

import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';

import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import * as ROLES from '../../constants/roles';


const Navigation = ({ authUser }) => (
    <div>
    <AuthUserContext.Consumer>
    {authUser =>
        authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
    </div>
  );

    const NavigationAuth = ({ authUser }) =>  (
    <div>
        <nav className="nav nav-pills nav-justified">
        <li>
        <Link to={ROUTES.ACCOUNT} className="nav-link active">Account</Link>
        </li>
        <li>
        <Link to={ROUTES.LANDING} className="nav-link active">Landing</Link>
        </li>
        <li>
        <Link to={ROUTES.HOME} className="nav-link active">Home</Link>
        </li>
        <li>
        <Link to={ROUTES.PERSONS} className="nav-link active">Persons</Link>
        </li>
        {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN} className="nav-link active">Admin</Link>
      </li>
    )}
        <li>
        <SignOutButton />
        </li>
        </nav>
    </div>
);

const NavigationNonAuth = () => (
    <div>
        <nav className="nav nav-pills nav-justified">
        <li>
        <Link to={ROUTES.SIGN_IN} className="nav-link active">Sign In</Link>
        </li>
        <li>
        <Link to={ROUTES.LANDING} className="nav-link active">Landing</Link>
        </li>
       
        </nav>
    </div>
    );

export default Navigation;