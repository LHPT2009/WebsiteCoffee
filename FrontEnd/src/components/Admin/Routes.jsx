import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../../views/Admin/Dashboard'
import Customers from '../../views/Admin/Customers'
import Products from '../../views/Admin/Products'

const Routes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            <Route path='/admin/customers' component={Customers}/>
            <Route path='/admin/products' component={Products}/>
        </Switch>
    )
}

export default Routes
