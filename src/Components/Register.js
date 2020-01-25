import React from 'react';
import RegisterLogo from '../assets/img/simply-paired-temp.png';

function Register(){
  return (
    <div className="register-photo">
      <div className="form-container">
          <div className="image-holder"></div>
          <form method="post">
              <img src={RegisterLogo} className="logo-img" alt="Simply Paired Logo" />
              <h2 className="text-center"><strong>Create</strong> an account.</h2>
              <div className="form-group"><p className="input-label">Email</p><input className="form-control" type="email" name="email" /></div>
              <div className="form-group"><p className="input-label">Password</p><input className="form-control" type="password" name="password" /></div>
              <div className="form-group"><p className="input-label">Password (repeat)</p><input className="form-control" type="password" name="password-repeat" /></div>
              <div className="form-group">
                  <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox" />I agree to the license terms.</label></div>
              </div>
              <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Sign Up</button></div><a className="already" href="#">You already have an account? Login here.</a></form>
      </div>
  </div>
  )
}

export default Register;
