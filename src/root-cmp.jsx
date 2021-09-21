import React from 'react'
import { Switch, Route } from 'react-router'
import routes from './routes.js'

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
//import {AppFooter} from './cmps/app-footer.jsx'

export class RootCmp extends React.Component {
    onToggleMenu = () => {
        document.body.classList.toggle('menu-open')
    }

    render() {
        return (
            <>
                <AppHeader />
                <main>
                <div className="screen" onClick={this.onToggleMenu}></div>
                    <Switch>
                        {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
                    </Switch>
                </main>
                <AppFooter />
            </>
        )
    }
}


