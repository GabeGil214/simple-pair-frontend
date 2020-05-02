import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Header, Box, Nav as NavBar, Anchor } from 'grommet';
import { AuthContext } from '../reducers/authReducer';
import styled from 'styled-components';
import { ExitToApp } from 'styled-icons/material';

const StyledText = styled.p`
        color: #fff;
      `;

const ExitIcon = (props) => (
  <ExitToApp
    style={{
      color: '#fff',
      width: '18px'
    }}
    {...props}
    />
);

function Nav(){
  const [state, dispatch] = useContext(AuthContext);

  function userLogout() {
    sessionStorage.clear();
    dispatch({type: 'LOGOUT'});
  }

   return (
     <Header pad="xsmall">
        <Box pad="medium" direction="row" align="center">
          <Anchor focusIndicator={false} className="navbar-brand" color="light-1" href="#">Simply Paired</Anchor>
        </Box>
        {state.isLoggedIn ?
          <NavBar pad="medium" direction="row" color="light-1">
              <Link to="/food"><StyledText>Welcome, {state.username}</StyledText></Link>
              <StyledText><Anchor href="#" focusIndicator={false} color="light-1" onClick={userLogout}><ExitIcon />Sign Out</Anchor></StyledText>
          </NavBar> :
          <NavBar pad="medium" direction="row" color="light-1">
              <Link to="/food"><StyledText>Home</StyledText></Link>
              <Link to="/"><StyledText>Log In</StyledText></Link>
              <Link to="/register"><StyledText>Sign Up</StyledText></Link>
          </NavBar>
        }
      </Header>
   )
}

export default Nav;
