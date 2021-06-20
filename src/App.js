import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

/*-----------------------------
Components */

import Footer from './components/Footer';

/*-----------------------------
 Pages */

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; 
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

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
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                  
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
            <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} />}/>
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />}/>
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />}/>

            <Footer />
          </Container>
        </Router>
      );
  }
  
}

export default App;
