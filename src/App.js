import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component from 'skylor-component';

class App extends Component {
  state = {
    str: '',
  }
  async componentWillMount() {
    const str = await this.Services.user.hi();
    this.setState({ str });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Skylor Component</h1>
          <h2 className="App-title">{this.state.str}</h2>
        </header>
      </div>
    );
  }
}

export default App;
