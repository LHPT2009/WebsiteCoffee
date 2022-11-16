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

import ListProductProvider from './context/ListProductContext'

import Coffee from './views/Collections/Coffee'
import ItemDetail from './components/Item/ItemDetail'
import Dashboard from './views/Admin/Dashboard'
import Layout from './components/Admin/layout/Layout'
import Customers from './views/Admin/Customers'
import Products from './views/Admin/Product/Products'
import ProductCategories from './views/Admin/ProductCategory/ProductCategories'
import Orders from './views/Admin/Orders'
import Users from './views/Admin/User/Users'
import Roles from './views/Admin/Role/Roles'

import SizeProducts from './views/Admin/SizeProduct/SizeProducts'
import Receipts from './views/Admin/Receipt/Receipts'
import Cart from './views/Cart/Cart'

import AddProduct from './views/Admin/Product/AddProduct'
import EditProduct from './views/Admin/Product/EditProduct'
import AddProductCategory from './views/Admin/ProductCategory/AddProductCategory'
import EditProductCategory from './views/Admin/ProductCategory/EditProductCategory'
import AddUser from './views/Admin/User/AddUser'
import EditUser from './views/Admin/User/EditUser'
import AddRole from './views/Admin/Role/AddRole'
import EditRole from './views/Admin/Role/EditRole'
import AddSizeProduct from './views/Admin/SizeProduct/AddSizeProduct'
import EditSizeProduct from './views/Admin/SizeProduct/EditSizeProduct'

import Discount from './views/Admin/Discount/Discount'
import AddDiscount from './views/Admin/Discount/AddDiscount'
import EditDiscount from './views/Admin/Discount/EditDiscount'

import Rate from './views/Admin/Rate/Rate'

import EditReceipt from './views/Admin/Receipt/EditReceipt'

import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import EnterEmail from './components/Auth/EnterEmail'
import CheckCode from './components/Auth/CheckCode'
import Repass from './components/Auth/Repass'

import Career from './views/Collections/Career'
import Profile from './views/Profile'

import ScrollToTop from 'react-scroll-to-top'

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ScrollToTop
        smooth
        top={480}
        component={
          <span className="material-symbols-rounded !text-[32px] !text-white">
            keyboard_arrow_up
          </span>
        }
        className="!z-[101] !w-[52px] !h-[52px] !rounded-full hover:!rounded-2xl !bg-primary transition-transform"
      />
      <ListProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/product" element={<Coffee />} />
            <Route path="/product/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/career" element={<Career />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/enteremail" element={<EnterEmail />} />
            <Route path="/checkcode" element={<CheckCode />} />
            <Route path="/repass" element={<Repass />} />

            <Route path="/admin" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="customers" element={<Customers />} />
              <Route path="products" element={<Products />} />
              <Route path="productcategories" element={<ProductCategories />} />
              <Route path="orders" element={<Orders />} />
              <Route path="users" element={<Users />} />
              <Route path="roles" element={<Roles />} />
              <Route path="sizeproducts" element={<SizeProducts />} />
              <Route path="receipts" element={<Receipts />} />
              <Route path="discount" element={<Discount />} />
              <Route path="rate" element={<Rate />} />

              <Route path="addproduct" element={<AddProduct />} />
              <Route path="editproduct/:id" element={<EditProduct />} />

              <Route
                path="addproductcategory"
                element={<AddProductCategory />}
              />
              <Route
                path="editproductcategory/:id"
                element={<EditProductCategory />}
              />

              <Route path="adduser" element={<AddUser />} />
              <Route path="edituser/:id" element={<EditUser />} />

              <Route path="addrole" element={<AddRole />} />
              <Route path="editrole/:id" element={<EditRole />} />

              <Route path="addsizeproduct" element={<AddSizeProduct />} />
              <Route path="editsizeproduct/:id" element={<EditSizeProduct />} />

              <Route path="adddiscount" element={<AddDiscount />} />
              <Route path="editdiscount/:id" element={<EditDiscount />} />

              <Route path="editreceipt/:id" element={<EditReceipt />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ListProductProvider>
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
