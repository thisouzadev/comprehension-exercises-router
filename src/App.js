import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/strictAccess">StrictAcess</Link></li>
            </ul>
          </nav>
          <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage={'Good Morning'}/>} />
      <Route path="/about" component={About}/>
      <Route path="/strictAccess" render={ () => (
        <StrictAccess user={ { username: 'joao', password: '1234' } } />
        )}
        />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
