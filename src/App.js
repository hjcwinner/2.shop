import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import store from './store'
import { Provider } from 'react-redux'
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

import Jumbocard from './layout/jumbocard'
import Detail from './layout/detail'
import data from './data'
import Cart from './Cart'

export let stockContext = React.createContext()


function App() {

  const [shoes, setShoes] = useState(data)
  let [stock, setStock] = useState([6,10,12])

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">SHoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>    
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" exact>
            <stockContext.Provider value={stock}>
              <Jumbocard shoes={shoes}/>
            </stockContext.Provider>
          </Route>
          <Route path="/detail/:id" exact>
            <Detail shoes={shoes}/>
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
