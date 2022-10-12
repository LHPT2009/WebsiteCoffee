import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../../views/Admin/Dashboard'
import Customers from '../../views/Admin/Customers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Switch>
    )
}

export default Routes
