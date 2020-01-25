import React from 'react'
import { Link } from 'react-router-dom';

function Nav(){
   return (
     <div id="top-nav-bar">
        <nav className="navbar navbar-dark navbar-expand-lg transparent navbar-custom">
            <div className="container"><a className="navbar-brand" href="#">Simply Paired</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navbarResponsive"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/login">Log In</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/register">sign up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
   )
}

export default Nav;
