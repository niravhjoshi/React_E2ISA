import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


//This way to create function do login inside function and return it values.
/*const userService = {
  getUserName: function (user){
    return user.firstname + ' '+user.lastname;
  },
};

//This where you can assign key to list
const key = 'name';
const user = {
[key]: 'Robin',
};
*/
const listvar = [
  {
  title: 'Learn Fucking React',
  url: 'https://reactjs.org/',
  author: 'Jordan Vader',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux is Awe',
  url: 'https://redux.js.org/',
  author: 'Dan Kylo, Luke Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];


class App extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      listvar
    }

    this.onDismiss= this.onDismiss.bind(this);
  }
  
  onDismiss(id){
    console.log(id)
    const updatedList =this.state.listvar.filter(function isNotId(item){
      return item.objectID !== id;
      
    });
    console.log(updatedList)
    this.setState({listvar: updatedList});
  }

  render() {
    //const hellvar ="This is some New";
    //This is where we will create method for detroying item from list upon click event on dismiss.

    return (
          <div className="jumbotron">
          <h2> Welcome to E2ISA App</h2>
          <header className="App-header">
          {this.state.listvar.map(item => 
          <div className="container" key={item.objectID}>
             <form>
          <input
            type="text"
            name="FirstName"
            placeholder="First name"
          />
          <input
            type="text"
            name="LastName"
            placeholder="Last name"
          />
          <input
            type="date"
            name="BDate"
            placeholder="BirthDate"
          />
          <button type="submit">Submit</button>
        </form>
          <code>
           <p>{item.title}</p>
           <p>{item.author}</p>
           <button className="btn btn-success" onClick={() => this.onDismiss(item.objectID)} type="button">
            Dismiss
          </button>
          </code>  
          </div>
          )}
          </header>
          </div>
    );
  }
}
export default App;
