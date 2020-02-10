import React from 'react'
import { Text, Footer as FooterContainer } from 'grommet'

function Footer(){
  return(
    <FooterContainer
      justify="center"
      pad="medium">
        <Text color="#FFF">Copyright&nbsp;© Palate Match 2018</Text>
    </FooterContainer>
  )
}

export default Footer;
