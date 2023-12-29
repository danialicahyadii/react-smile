import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import App from './App';
import About from './components/about';
import Contact from './components/contact';
import Blog from './components/blog';
import Profile from './components/profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Header extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Navbar expand="lg" className="bg-light">
                        <Container>
                            <Navbar.Brand><Link to='/'>Easy Learning</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link><Link to='/about'>About Us</Link></Nav.Link>
                                    <Nav.Link><Link to='/contact'>Contact Us</Link></Nav.Link>
                                    <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                                    <Nav.Link><Link to='/profile'>Profile</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/">
                        <App/>
                    </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

