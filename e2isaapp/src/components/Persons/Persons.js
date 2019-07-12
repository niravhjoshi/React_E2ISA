import React, { Component } from 'react';
import FileUploader from "react-firebase-file-uploader";

import firebase from "firebase";
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
            isUploading: false,
            progress: 0,
            PersonURL:'',
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

    // onChangePerson_Img = event =>{
    //     this.setState({Person_Img:event.target.value,
    //           });    
    // };
    
    
    // componentWillUnmount() {
    //   this.props.firebase.persons().off();
    // }
  
    onCreatePersons = (event, authUser) => {
        this.props.firebase.persons().push({
            Person_Name: this.state.Person_Name,
             Person_Sex: this.state.Person_Sex,
             Person_BDate: this.state.Person_BDate,
             Person_Img: this.state.Person_Img,
             PersonURL: this.state.PersonURL,
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

      handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
      handleProgress = progress => this.setState({ progress });
      handleUploadError = error => {
                                    this.setState({ isUploading: false });
                                    console.error(error);
                                    };

      handleUploadSuccess = (filename,authUser) => {
        this.setState({ Person_Img: filename, progress: 100, isUploading: false });
        firebase
          .storage()
          .ref(`Images`)
          .child(filename)
          .getDownloadURL()
          .then(url => this.setState({ PersonURL: url }));
      };



      render() {
        const { Person_Name,Person_BDate,Person_Sex} = this.state;
        return(
            <AuthUserContext.Consumer>
        {authUser => (
                    <form className="text-center"  onSubmit={event => this.onCreatePersons(event, authUser)} >
                    <p>Person Name</p>
                    <input   type="text"   value={Person_Name}   onChange={this.onChangePerson_NameText}  /><br></br>
                    <p>Person BirthDate</p>
                    <input   type="date"   value={Person_BDate}   onChange={this.onChangePerson_BDate}  /><br></br>
                    <p>Person Sex</p>
                    <label className="radio-inline">
                        <input type="radio" value="Male"
                        checked={this.state.Person_Sex === 'Male'}  
                        onChange={this.onChangePerson_Sex}/>Male
                    </label><br></br>
                    <label className="radio-inline">
                        <input type="radio" value="Female" 
                        checked = {this.state.Person_Sex ==='Female'}
                        onChange={this.onChangePerson_Sex}/>Female
                    </label><br></br>
                    <label className="radio-inline">
                        <input type="radio" value="None" 
                        checked = {this.state.Person_Sex ==='None'}
                        onChange={this.onChangePerson_Sex}/>None
                    </label><br></br>
                    <label>Person Image Upload:</label>
                        {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                        {this.state.PersonURL && <img className="img-rounded" alt={this.state.Person_Name} src={this.state.PersonURL} />}<br></br>
                         <FileUploader
                        accept="image/*.pdf,.csv"
                        name="Person_Img"
                        randomizeFilename
                        storageRef={firebase.storage().ref(`Images`)}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    /><br></br>

                    <button type="submit">Send</button>
                    </form>
            
        )}
            </AuthUserContext.Consumer>
        )
}
}
export default withFirebase(Persons);
