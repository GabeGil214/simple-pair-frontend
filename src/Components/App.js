import React, { useContext, useState, useEffect } from 'react';
import Register from './Register'
import Nav from './Nav'
import Footer from './Footer';
import Login from './Login';
import { Main } from 'grommet';
import AppContainer from './AppContainer';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../reducers/authReducer';
import '../App.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/styles.css';


function App() {
  const [state, dispatch] = useContext(AuthContext);
  const [username, setUsername] = useState(
    sessionStorage.getItem('username') || ''
  );

  useEffect(() => {
      if (username){
      dispatch({
        type: 'LOGIN',
        payload: {
        username,
        key: sessionStorage.getItem('key')
      }})
    }
  }, []);

  return (
    <Router>
      <Main className="App">
        <Nav />
        <Route exact path="/food" component={AppContainer} />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Footer />
      </Main>
    </Router>
  );
}



export default App;
