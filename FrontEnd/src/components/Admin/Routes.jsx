import React from 'react'

import { Route, Router } from 'react-router-dom'

import Dashboard from '../../views/Admin/Dashboard'
import Customers from '../../views/Admin/Customers'
import Products from '../../views/Admin/Products'

const Routes = () => {
  return (
    <Routes>
      <Route path="/admin" exact element={Dashboard} />
      <Route path="/admin/customers" element={Customers} />
      <Route path="/admin/products" element={Products} />
    </Routes>
  )
}

export default Routes
