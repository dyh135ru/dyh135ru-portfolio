import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css'; 

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Dylan Javier Ruiz Herrera",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'My Portfolio',
        subTitle: 'Welcome!',
        text: 'Checkout my projects below'
      },
      projects: {
        title: 'My projects',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Keep in Touch!',
      }
    }
  }

  render(){
    return (
        <Router>
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transpartent" expand="lg">
              <Navbar.Brand>Dylan Javier Ruiz Herrera</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toogle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/about">Aboutt</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>

                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </Router>
      );
  }
  
}

export default App;
