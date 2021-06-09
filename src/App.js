import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Login from './components/Login';
import { Component } from 'react';

export default class App extends Component {

  state = {
    isLoggedIn: false
  };

  setLogin = (value) => {
    this.setState({isLoggedIn: value});
  }

  render () {
    return (
      <div className="App">
      <AppBar position="static">
        <Toolbar>
          My Music App
        </Toolbar>
      </AppBar>

      {
        !this.state.isLoggedIn
        ? <Login onLogin={this.setLogin} />
        : 'Add Dashboard component'
      }
    </div>
    )
  };
}
