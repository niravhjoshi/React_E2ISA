import React from 'react';
import { compose } from 'recompose';


import { withAuthorization, withEmailVerification } from '../Session';


const Home = () => (
    <div>
        <h1>WElcome to HOme Page </h1>
        
    </div>
);

const condition = authUser =>  !!authUser;


export default compose(
    withEmailVerification,
    withAuthorization(condition),
  )(Home);
  