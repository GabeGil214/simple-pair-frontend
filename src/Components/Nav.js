import React from 'react'
import { Link } from 'react-router-dom';
import { Header, Box, Nav as NavBar, Anchor } from 'grommet'
import styled from 'styled-components'

const StyledText = styled.p`
        color: #fff;
      `;

function Nav(){
   return (
     <Header pad="xsmall">
        <Box pad="medium" direction="row" align="center">
          <Anchor focusIndicator={false} className="navbar-brand" color="light-1" href="#">Simply Paired</Anchor>
        </Box>
        <NavBar pad="medium" direction="row" color="light-1">
            <Link to="/"><StyledText>Home</StyledText></Link>
            <Link to="/login"><StyledText>Log In</StyledText></Link>
            <Link to="/register"><StyledText>Sign Up</StyledText></Link>
        </NavBar>
      </Header>
   )
}

export default Nav;
