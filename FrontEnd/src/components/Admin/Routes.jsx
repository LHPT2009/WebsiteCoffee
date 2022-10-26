import React from 'react'

import { Route, Routes as Switch } from 'react-router-dom'

import Dashboard from '../../views/Admin/Dashboard'
import Customers from '../../views/Admin/Customers'
import Products from '../../views/Admin/Products'

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin" exact element={Dashboard} />
      <Route path="/admin/customers" element={Customers} />
      <Route path="/admin/products" element={Products} />
    </Switch>
  )
}

export default Routes
