import React,{Component} from 'react';
import './App.css';

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

class Developer
{
  constructor(firstname,lastname){
  this.firstname = firstname;
  this.lastname = lastname;
  }
  getName(){
  return (this.firstname +' '+ this.lastname)
  }
}

const newDev = new Developer("Nirav","Joshi")
console.log(newDev.getName());
class App extends Component
{
  render() {
    const hellvar ="This is some New";
    return (
           <div className="App">
          <h2> Welcome to E2ISA App</h2>
          <header className="App-header">
          {listvar.map(items => 
          <div key={items.objectID}>
          <code>{items.title}</code><p>
          <code>{items.url}</code></p>
          </div>

          )}  
          </header>
          </div>
        
      
      
  );
}
}
export default App;
