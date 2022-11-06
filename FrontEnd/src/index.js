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
import Products from './views/Admin/Products'
import ProductCategories from './views/Admin/ProductCategory/ProductCategories'
import Orders from './views/Admin/Orders'
import Users from './views/Admin/User/Users'
import Roles from './views/Admin/Role/Roles'
import EarnPoints from './views/Admin/EarnPoint/EarnPoints'
import Stats from './views/Admin/Stats'
import Staffs from './views/Admin/Staff/Staffs'
import Positions from './views/Admin/Position/Positions'
import Ingredients from './views/Admin/Ingredient/Ingredients'
import Suppliers from './views/Admin/Supplier/Suppliers'
import SizeProducts from './views/Admin/SizeProduct/SizeProducts'
import Recipes from './views/Admin/Recipe/Recipes'
import Receipts from './views/Admin/Receipt/Receipts'
import ReceiptIngredients from './views/Admin/ReceiptIngredient/ReceiptIngredients'
import Cart from './views/Cart/Cart'

import AddProduct from './views/Admin/Product/AddProduct'
import EditProduct from './views/Admin/Product/EditProduct'
import DeleteProduct from './views/Admin/Product/DeleteProduct'
import AddProductCategory from './views/Admin/ProductCategory/AddProductCategory'
import EditProductCategory from './views/Admin/ProductCategory/EditProductCategory'
import DeleteProductCategory from './views/Admin/ProductCategory/DeleteProductCategory'
import AddEarnPoint from './views/Admin/EarnPoint/AddEarnPoint'
import EditEarnPoint from './views/Admin/EarnPoint/EditEarnPoint'
import DeleteEarnPoint from './views/Admin/EarnPoint/DeleteEarnPoint'
import AddUser from './views/Admin/User/AddUser'
import EditUser from './views/Admin/User/EditUser'
import DeleteUser from './views/Admin/User/DeleteUser'
import AddRole from './views/Admin/Role/AddRole'
import EditRole from './views/Admin/Role/EditRole'
import DeleteRole from './views/Admin/Role/DeleteRole'
import AddPosition from './views/Admin/Position/AddPosition'
import EditPosition from './views/Admin/Position/EditPosition'
import DeletePosition from './views/Admin/Position/DeletePosition'
import AddStaff from './views/Admin/Staff/AddStaff'
import EditStaff from './views/Admin/Staff/EditStaff'
import DeleteStaff from './views/Admin/Staff/DeleteStaff'
import AddIngredient from './views/Admin/Ingredient/AddIngredient'
import EditIngredient from './views/Admin/Ingredient/EditIngredient'
import DeleteIngredient from './views/Admin/Ingredient/DeleteIngredient'
import AddSupplier from './views/Admin/Supplier/AddSupplier'
import EditSupplier from './views/Admin/Supplier/EditSupplier'
import DeleteSupplier from './views/Admin/Supplier/DeleteSupplier'
import AddSizeProduct from './views/Admin/SizeProduct/AddSizeProduct'
import EditSizeProduct from './views/Admin/SizeProduct/EditSizeProduct'
import DeleteSizeProduct from './views/Admin/SizeProduct/DeleteSizeProduct'
import AddRecipe from './views/Admin/Recipe/AddRecipe'
import EditRecipe from './views/Admin/Recipe/EditRecipe'
import DeleteRecipe from './views/Admin/Recipe/DeleteRecipe'
import AddReceipt from './views/Admin/Receipt/AddReceipt'
import EditReceipt from './views/Admin/Receipt/EditReceipt'
import DeleteReceipt from './views/Admin/Receipt/DeleteReceipt'
import AddReceiptIngredient from './views/Admin/ReceiptIngredient/AddReceiptIngredient'
import EditReceiptIngredient from './views/Admin/ReceiptIngredient/EditReceiptIngredient'
import DeleteReceiptIngredient from './views/Admin/ReceiptIngredient/DeleteReceiptIngredient'

import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import EnterEmail from './components/Auth/EnterEmail'
import Repass from './components/Auth/Repass'
import CheckCode from './components/Auth/CheckCode'

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ListProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/product" element={<Coffee />} />
            <Route path="/product/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />

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
              <Route path="earnpoints" element={<EarnPoints />} />
              <Route path="stats" element={<Stats />} />
              <Route path="staffs" element={<Staffs />} />
              <Route path="positions" element={<Positions />} />
              <Route path="ingredients" element={<Ingredients />} />
              <Route path="suppliers" element={<Suppliers />} />
              <Route path="sizeproducts" element={<SizeProducts />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="receipts" element={<Receipts />} />
              <Route path="receiptingredients" element={<ReceiptIngredients />} />

              <Route path="addproduct" element={<AddProduct />} />
              <Route path="editproduct/:id" element={<EditProduct />} />
              <Route path="deleteproduct/:id" element={<DeleteProduct />} />

              <Route path="addproductcategory" element={<AddProductCategory />} />
              <Route path="editproductcategory/:id" element={<EditProductCategory />} />
              <Route path="deleteproductcategory/:id" element={<DeleteProductCategory />} />

              <Route path="adduser" element={<AddUser />} />
              <Route path="edituser/:id" element={<EditUser />} />
              <Route path="deleteuser/:id" element={<DeleteUser />} />

              <Route path="addrole" element={<AddRole />} />
              <Route path="editrole/:id" element={<EditRole />} />
              <Route path="deleterole/:id" element={<DeleteRole />} />

              <Route path="addearnpoint" element={<AddEarnPoint />} />
              <Route path="editearnpoint/:id" element={<EditEarnPoint />} />
              <Route path="deleteearnpoint/:id" element={<DeleteEarnPoint />} />

              <Route path="addstaff" element={<AddStaff />} />
              <Route path="editstaff/:id" element={<EditStaff />} />
              <Route path="deletestaff/:id" element={<DeleteStaff />} />

              <Route path="addposition" element={<AddPosition />} />
              <Route path="editposition/:id" element={<EditPosition />} />
              <Route path="deleteposition/:id" element={<DeletePosition />} />

              <Route path="addingredient" element={<AddIngredient />} />
              <Route path="editingredient/:id" element={<EditIngredient />} />
              <Route path="deleteingredient/:id" element={<DeleteIngredient />} />

              <Route path="addsupplier" element={<AddSupplier />} />
              <Route path="editsupplier/:id" element={<EditSupplier />} />
              <Route path="deletesupplier/:id" element={<DeleteSupplier />} />

              <Route path="addsizeproduct" element={<AddSizeProduct />} />
              <Route path="editsizeproduct/:id" element={<EditSizeProduct />} />
              <Route path="deletesizeproduct/:id" element={<DeleteSizeProduct />} />

              <Route path="addrecipe" element={<AddRecipe />} />
              <Route path="editrecipe/:id" element={<EditRecipe />} />
              <Route path="deleterecipe/:id" element={<DeleteRecipe />} />

              <Route path="addreceipt" element={<AddReceipt />} />
              <Route path="editreceipt/:id" element={<EditReceipt />} />
              <Route path="deletereceipt/:id" element={<DeleteReceipt />} />

              <Route path="addreceiptingredient" element={<AddReceiptIngredient />} />
              <Route path="editreceiptingredient/:id" element={<EditReceiptIngredient />} />
              <Route path="deletereceiptingredient/:id" element={<DeleteReceiptIngredient />} />
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
