import React from 'react';
import Register from './Register'
import Nav from './Nav'
import Footer from './Footer';
import Login from './Login';
import { Main } from 'grommet'
import GraphContainer from './GraphContainer';
import AppContainer from './AppContainer'
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import '../App.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/styles.css';


function App() {
  return (
    <Router>
      <Main className="App">
        <Nav />
        <Route exact path="/" component={AppContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Footer />
      </Main>
    </Router>
  );
}

export default App;
