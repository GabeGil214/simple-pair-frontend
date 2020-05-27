import React, { useState, useContext } from 'react';
import { Box, Heading } from 'grommet';
import { Redirect } from 'react-router-dom';
import { ImageContainer, ErrorText, FormButton, SleekInput, RegisterForm, InputLabel, FooterLink } from './styled';
import axios from 'axios';
import { AuthContext } from '../reducers/authReducer';
import RegisterLogo from '../assets/img/simply-paired-temp.png';
import PRODUCTION_URL from '../assets/config.js';

function Register(){
  const [authState, authDispatch] = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [redirect, setRedirect] = useState(false);


  async function registerNewUser(){
    setErrorMessage('');
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password1', password1);
    formData.append('password2', password2);

    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type':'multipart/form-data'
      }
    }

    axios.post(PRODUCTION_URL + '/api/rest-auth/registration/', formData, options).then(response => {
      setRedirect(true);
      authDispatch({
        type: 'LOGIN',
        payload: {
        username,
        key: response.data.key
      }});

    }).catch(error => {
      if(!error.response){
        setErrorMessage('Something went wrong. Please try again.')
      } else if(error.response.status >= 400 && error.response.status < 500){
        setErrorMessage(evaluateError(error.response.data))
      } else if (error.response.status >= 500){
        setErrorMessage('Could not communicate with server. Please try again.')
      }
    })
  }

  if (redirect === true) {
    return <Redirect to='/' />
  } else {
    return (
        <Box
          width="large"
          elevation="medium"
          round="small"
          direction="row"
          alignSelf="center"
          className="form-container">
            <ImageContainer></ImageContainer>
            <RegisterForm
              width="medium"
              pad="small"
              alignSelf="end"
              alignContent="center">
                <img src={RegisterLogo} className="logo-img" alt="Simply Paired Logo" />
                <Heading level="3" alignSelf="center">Create an account</Heading>
                  {errorMessage && (
                    <ErrorText>{errorMessage}</ErrorText>
                  )}
                <div className="form-group"><InputLabel>Username</InputLabel><SleekInput type="text" name="username" onChange={event => setUsername(event.target.value)} /></div>
                <div className="form-group"><InputLabel>Email</InputLabel><SleekInput type="email" name="email" onChange={event => setEmail(event.target.value)} /></div>
                <div className="form-group"><InputLabel>Password</InputLabel><SleekInput type="password" name="password1" onChange={event => setPassword1(event.target.value)}/></div>
                <div className="form-group"><InputLabel>Password (repeat)</InputLabel><SleekInput  type="password" name="password2" onChange={event => setPassword2(event.target.value)}/></div>
                <div className="form-group">
                    <div className="form-check"><InputLabel><input className="form-check-input" type="checkbox" />I agree to the license terms.</InputLabel></div>
                </div>
                <div className="form-group"><FormButton type="submit" label="Sign Up" onClick={registerNewUser} /></div><FooterLink to="/login">You already have an account? Login here.</FooterLink>
            </RegisterForm>
        </Box>
    )
  }


}


function evaluateError(errorMessage){
  if(errorMessage.non_field_errors){
    return errorMessage.non_field_errors
  } else if(errorMessage.username){
    return errorMessage.username
  } else if(errorMessage.password1){
    return errorMessage.password1
  } else if(errorMessage.password2){
    return errorMessage.password2
  } else if(errorMessage.email){
    return errorMessage.email
  }
}

export default Register;
