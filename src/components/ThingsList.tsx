import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../store';
import { Thing } from '../store/things/types';
import { fetchRequest } from '../store/things/actions';

interface Props {
    things: Thing[];
    getThings: () => void;
}

class ThingsListComponent extends React.Component<Props> {

    componentDidMount() {
        this.props.getThings();
    }

    render() {
        return (
            <div className='list-item-group'>
                {
                    this.props.things.map(thing =>
                        <div className='list-item' key={thing.id}>{thing.description}</div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    things: state.things.things
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getThings: () => dispatch(fetchRequest())
});

export const ThingsList = connect(mapStateToProps, mapDispatchToProps)(ThingsListComponent);

