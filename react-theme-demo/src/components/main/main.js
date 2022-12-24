import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';

import useMain from '../../talons/main';
import { useScrollTopOnChange } from '../../hooks/useScrollTopOnChange';

const Main = props => {
    const { pathname } = useLocation();
    const { ComponentRender } = useMain();
    useScrollTopOnChange(pathname);

    return (
        <div>
            <Switch>
                <Route>
                    <ComponentRender />
                </Route>
            </Switch>
        </div>
    );
}
export default Main;