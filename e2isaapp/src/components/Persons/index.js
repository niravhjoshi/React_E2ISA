import React from 'react';
import { compose } from 'recompose';


import Persons from './Persons';
import { withAuthorization, withEmailVerification } from '../Session';


const PersonPage = () => (
    <div>
        <h1>WElcome to Person Page </h1>
        <Persons />        
   </div>
);

const condition = authUser =>  !!authUser;


export default compose(
    withEmailVerification,
    withAuthorization(condition),
  )(PersonPage);
  
