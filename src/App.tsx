import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About } from './containers/About';
import { Home } from './containers/Home';

import './App.css';
import logo from './logo.svg';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <div className='container-fluid'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
