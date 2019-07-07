import React from 'react';


import { withAuthorization } from '../Session';


const Home = () => (
    <div>
        <h1>WElcome to HOme Page </h1>
        
    </div>
);

const condition = authUser =>  !!authUser;

export default withAuthorization(condition)(Home);