import React from 'react';
import RegisterLogo from '../assets/img/simply-paired-temp.png';

function Login(){
  return(
    <div className="login-clean">
        <form method="post">
          <div className="header-container">
            <img src={RegisterLogo} className="logo-img" alt="Simply Paired Logo" />
            <h1 className="login-header">Welcome to Simply Paired!</h1>
          </div>
          <h2 className="sr-only">Login Form</h2>
          <div className="form-inputs">
            <div className="form-group"><p className="input-label">Email</p><input className="form-control" type="email" name="email" /></div>
            <div className="form-group"><p className="input-label">Password</p><input className="form-control" type="password" name="password" /></div>
            <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Log In</button></div><a className="forgot" href="#">Forgot your email or password?</a>
          </div>
        </form>
    </div>
  )
}

export default Login;
