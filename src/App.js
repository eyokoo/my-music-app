import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Dashboard from './components/Dashboard';
import Login from './components/Login';

export default class App extends Component {

  state = {
    loggedIn : false
  };

  setLogin = (value) => {
    this.setState({loggedIn : value});
  }

  render () {
    const { loggedIn } = this.state;

    return (
      <div className="App">
      <AppBar position="static">
        <Toolbar>
          My Music App
        </Toolbar>
      </AppBar>

      {
        loggedIn 
        ? <Dashboard />
        : <Login onLogin={this.setLogin} />
      }
    </div>
    )
  };
}
