import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Coffee from './views/Collections/Coffee'
import ItemDetail from './components/Item/ItemDetail'
import SendMail from './views/ResetPassword/SendMail'
import CheckCode from './views/ResetPassword/CheckCode'
import ResetPassword from './views/ResetPassword/ResetPassword'
import Dashboard from './views/Admin/Dashboard'
import Layout from './components/Admin/layout/Layout'
import Customers from './views/Admin/Customers'
import Products from './views/Admin/Products'
import Orders from './views/Admin/Orders'


const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product" element={<Coffee />} />
          <Route path="/product/:id" element={<ItemDetail />} />
          
          <Route path="/sendmail" element={<SendMail />} />
          <Route path="/checkcode" element={<CheckCode />} />
          <Route path="/reset" element={<ResetPassword />} />

          <Route path="/admin" element={<Layout/>}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
