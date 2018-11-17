import * as React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { Route, Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';
import { RootState } from '../store';

interface ConditionalRouteProps extends RouteProps {
    routeCondition: boolean;
    redirectTo: string;
}

class ConditionalRoute extends React.Component<ConditionalRouteProps> {
    render() {
        // Extract RouteProps without component property to rest.
        const { component: Component, routeCondition, redirectTo, ...rest } = this.props;
        return <Route {...rest} render={this.renderFn} />;
    }

    private renderFn = (renderProps: RouteComponentProps<any>) => {
        if (this.props.routeCondition) {
            const { component: Component } = this.props; // JSX accepts only uppercase.
            if (!Component) {
                return null;
            }
            return <Component {...renderProps} />;
        }

        return <Redirect to={this.props.redirectTo} />;
    }
}

function connectConditionalRoute<S>(
    mapStateToProps: MapStateToPropsParam<ConditionalRouteProps, RouteProps, S>) {
        return connect<ConditionalRouteProps, {}, RouteProps, S>(mapStateToProps)(ConditionalRoute);
}

export const LoggedInRoute = connectConditionalRoute<RootState>(state => ({
    redirectTo: '/login',
    routeCondition: state.user.user !== undefined,
}));

export const UnauthenticatedRoute = connectConditionalRoute<RootState>(state => ({
    redirectTo: '/',
    routeCondition: state.user.user === undefined,
}));
