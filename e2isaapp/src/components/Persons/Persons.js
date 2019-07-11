import React, { Component } from 'react';

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';


class Persons extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            Person_Name : '',
            Person_Sex: '',
            Person_BDate:'',
            Person_Img:'',
        };

    }

    onChangePerson_NameText = event => {
        this.setState({ Person_Name: event.target.value});
      };
    
    onChangePerson_Sex = event =>{
          this.setState({Person_Sex:event.target.value });    
      };

    onChangePerson_BDate = event =>{
        this.setState({Person_BDate:event.target.value,
              });    
    };

    onChangePerson_Img = event =>{
        this.setState({Person_Img:event.target.value,
              });    
    };
    
    
    // componentWillUnmount() {
    //   this.props.firebase.persons().off();
    // }
  
    onCreatePersons = (event, authUser) => {
        this.props.firebase.persons().push({
            Person_Name: this.state.Person_Name,
             Person_Sex: this.state.Person_Sex,
             Person_BDate: this.state.Person_BDate,
            Person_Img: this.state.Person_Img,
            userId: authUser.uid,
          createdAt: this.props.firebase.serverValue.TIMESTAMP,
        });
    
        this.setState({ Person_Name: '' ,
                        Person_Sex:'',
                        Person_BDate:'',
                        Person_Img:'',
                     });
    
        event.preventDefault();
      };
      render() {
        const { Person_Name,Person_BDate,Person_Img,Person_Sex} = this.state;
        return(
            <AuthUserContext.Consumer>
        {authUser => (
                    <form onSubmit={event => this.onCreatePersons(event, authUser)} >
                    <p>Person Name</p>
                    <input   type="text"   value={Person_Name}   onChange={this.onChangePerson_NameText}  /><br></br>
                    <p>Person BirthDate</p>
                    <input   type="date"   value={Person_BDate}   onChange={this.onChangePerson_BDate}  /><br></br>
                    <p>Person Sex</p>
                    <input   type="text"   value={Person_Sex}   onChange={this.onChangePerson_Sex}  /><br></br>
                    <p>Person Image</p>
                    <input   type="text"   value={Person_Img}   onChange={this.onChangePerson_Img}  /><br></br>

                    <button type="submit">Send</button>
                    </form>
            
        )}
            </AuthUserContext.Consumer>
        )
}
}
export default withFirebase(Persons);
