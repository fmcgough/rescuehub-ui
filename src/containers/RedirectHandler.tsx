import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router';
import * as queryString from 'query-string';

import { User } from '../store/users/types';
import { fetchContext } from '../store/users/actions';
import { RootState } from '../store';

interface Props extends RouteComponentProps<{}> {
    user?: User;
    authError: string;
    getUser: (token: string) => void;
}

/**
 * After a successful login with Facebook/Google, we use the short-lived token
 * present in the redirect URL to get a longer-lived token from the server which
 * we can use to authenticate with.
 */
class RedirectHandlerComponent extends React.Component<Props> {

    getTokenParam(): string {
        // URL will be like: /oauth2/callback/facebook?#access_token=xxxx
        const params = queryString.parse(this.props.location.hash);
        return params.access_token as string;
    }

    componentDidMount() {
        this.props.getUser(this.getTokenParam());
    }

    componentDidUpdate(prev: Props) {
        if (this.props.authError !== prev.authError) {
            console.error('Error fetching context: ' + this.props.authError);
        }
    }

    render() {
        if (this.props.user) {
            return <Redirect to='/' />;
        } else if (this.props.authError) {
            return <Redirect to='/login' />;
        } else {
            return <div />; // TODO some kind of loading spinner?
        }
    }
}

const mapStateToProps = (state: RootState) => ({
    hasError: state.user.authError,
    user: state.user.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUser: (token: string) => dispatch(fetchContext(token))
});

export const RedirectHandler = connect(mapStateToProps, mapDispatchToProps)(RedirectHandlerComponent);

