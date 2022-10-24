import MenuItem from './components/Item/MenuItem'
import Auth from './views/Auth'
import Coffee from './views/Collections/Coffee'
import Home from './views/Home'
import Dashboard from './views/Admin/Dashboard'
import Layout from './components/Admin/layout/Layout'
import Button from './components/Button/Button'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="font-googleSansMedium p-6">
      {/* <Home /> */}
      {/* <Coffee /> */}
      <Button type="button">
        Testing button
      </Button>
      <Button type="button" buttonStyle="btn--primary-outline">
        Testing buthjton
      </Button>


      {/* <Router>
      <Route path="/" exact>
          <Home></Home>
      </Route>
      <Route path='/admin'>
        <Layout>
        <Dashboard></Dashboard>
        </Layout>
      </Route>
      </Router> */}
    </div>
  )
}

export default App
