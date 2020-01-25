import React from 'react';
import Register from './Register'
import Nav from './Nav'
import Footer from './Footer';
import Login from './Login';
import GraphContainer from './GraphContainer';
import { Route } from 'react-router-dom';
import '../App.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/styles.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={GraphContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Footer />
    </div>
  );
}

export default App;
