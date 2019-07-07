import React from 'react';

import { withAuthorization } from '../Session';
import {PasswordForgetForm} from '../PasswordForget';
import {PasswordChangeFormExp} from '../PasswordChange';

const Account = () => (
    <div>
        <h1>Account</h1>
        <br></br>
        <br></br>
        <hr></hr>
        <h2>If you forget your password we will send password reset link in your email please enter your email here</h2>
        <PasswordForgetForm />
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <h2>If you wish to change your password you can do it here directly.</h2>
        <PasswordChangeFormExp />
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);