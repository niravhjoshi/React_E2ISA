import React, { Component } from 'react';

import { withFirebase } from '../Firebase';


const INITIAL_STATE = {
    password_one :'',
    password_two: '',
    error : null
}

class PasswordChangeForm extends Component{

    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE}
    }

    onSubmit = event => {
        const{password_one}=this.state;

        this.props.firebase
        .doPasswordUpdate(password_one)
        .then(()=>{
            this.setState({...INITIAL_STATE});
        });
        event.preventDefault();
    };

    onChange = event =>{
        this.setState({[event.target.name]:event.target.value});
    };

    render()
        {
        const {password_one,password_two,error} = this.state;
        const isInvalid = 
        password_one !== password_two || password_one === '';
        
        return(

            <form onSubmit={this.onSubmit}>
                <input  name="passwordOne"  value={password_one}  onChange={this.onChange}  type="password"  placeholder="New Password"/>
                <input  name="passwordTwo"  value={password_two}  onChange={this.onChange}  type="password"  placeholder="Confirm New Password"/>
                <button disabled={isInvalid} type="submit">
                Reset My Password
                </button>

                {error && <p>{error.message}</p>}
      </form>
        )
    }
}


const PasswordChangeFormExp = withFirebase(PasswordChangeForm);
export  {PasswordChangeFormExp}