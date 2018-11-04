import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { About } from './containers/About';
import { Home } from './containers/Home';

import './themes/app.theme.scss';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header />
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
