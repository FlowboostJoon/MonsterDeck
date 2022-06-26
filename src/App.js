import { Component } from 'react';
import './App.css';

class App extends Component {    

  constructor(){
    super();

    this.state = { 
      monsters: [
        {
          id: 1,
          name: "Dracula",
        },
        {
          id: 2,
          name: "Frankenstein",
        },
        {
          id: 3,
          name: "Devil"
        }
      ]  

    }   
  }


  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>            
            </div>;
          })}
      </div>
    );
  }
}

export default App;
