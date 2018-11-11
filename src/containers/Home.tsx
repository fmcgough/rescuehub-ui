import * as React from 'react';
import { Link } from 'react-router-dom';

import { ThingsList } from '../components/ThingsList';

export class Home extends React.Component<{}> {

    render() {
        return (
            <section id='home'>
                <p className='lead'>This is the home page</p>
                <Link to='/about'>About</Link>

                <ThingsList />
            </section>
        );
    }
}
