import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

import Jumbocard from './layout/jumbocard'
import Detail from './layout/detail'
import data from './data'

function App() {

  const [shoes, setShoes] = useState(data)

  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">SHoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
            <Nav.Link> <Link to="/detail">Detail</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact>
          <Jumbocard shoes={shoes}/>
        </Route>
        <Route path="/detail/:id" exact>
          <Detail shoes={shoes}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
