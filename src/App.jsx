import React, {Component} from "react";
import './App.css';
import NamesList from "./Components/NamesList/NamesList";
import Name from "./Components/Name/Name";
import AlertUser from "./Components/AlertUser/AlertUser";
import SuperHeroTable from "./Components/SuperHeroTable/SuperHeroTable";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Reggie',
      lastName: 'White',
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie'],
      message: 'Dev Code Camp',
      superheroes: [
        {
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondarAbility: 'Rich'
        },
        {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondarAbility: 'Fly'
        },
        {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondarAbility: 'Shoots web'
        }
    ]
  }
}



    render() {
      return (
        <div className="container-fluid">
          <Name firstName={this.state.firstName} lastName={this.state.lastName}/>
          <NamesList names={this.state.names} />

          <AlertUser message={this.state.message}/>
          <SuperHeroTable superheroes={this.state.superheroes} />
        </div>
      
      )
    }
}

export default App;


