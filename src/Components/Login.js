import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Heading } from 'grommet';
import { AuthContext } from '../reducers/authReducer';
import { SleekInput, FormButton, ErrorText, ImageContainer, LoginForm, InputLabel, FooterLink } from './styled';
import RegisterLogo from '../assets/img/simply-paired-temp.png';

function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');
  const [state, dispatch] = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');


  async function userLogin(){
    setErrorMessage('');
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);


    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type':'multipart/form-data'
      }
    }

    axios.post('http://127.0.0.1:8000/api/rest-auth/login/', formData, options).then(response => {
      setRedirect(true);
      dispatch({
        type: 'LOGIN',
        payload: {
        username,
        key: response.data.key
      }});

    }).catch(error => {
      if(error.response.status >= 400 && error.response.status < 500){
        setErrorMessage('Username and Password are incorrect')
      } else if (error.response.status >= 500){
        setErrorMessage('Could not communicate with server. Please try again.')
      } else {
        setErrorMessage('Something went wrong. Please try again.')
      }
    })
  }


  if (redirect === true) {
    return <Redirect to='/' />
  } else {
    return (
      <LoginForm
        width="medium"
        pad="small"
        round="small"
        >
            <div className="header-container">
              <img src={RegisterLogo} className="logo-img" alt="Simply Paired Logo" />
              <Heading level="3" alignSelf="center" >Welcome to Simply Paired!</Heading>
            </div>
            {errorMessage && (
              <ErrorText>{errorMessage}</ErrorText>
            )}
            <h2 className="sr-only">Login Form</h2>
            <div className="form-inputs">
              <div className="form-group"><InputLabel>Username</InputLabel><SleekInput type="text" name="username" onChange={event => setUsername(event.target.value)}/></div>
              <div className="form-group"><InputLabel>Password</InputLabel><SleekInput type="password" name="password" onChange={event => setPassword(event.target.value)}/></div>
              <div className="form-group"><FormButton color="#ff6a00" label="Log In" type="submit" size="large"  onClick={userLogin}/></div><FooterLink to="#">Forgot your email or password?</FooterLink>
            </div>
      </LoginForm>
    )
  }
}

export default Login;
