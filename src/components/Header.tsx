import * as React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component<{}> {

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-default'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>RescueHub</Link>
                </div>
            </nav>
        );
    }
}
