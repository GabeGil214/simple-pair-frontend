import React from 'react';
import backgroundURL from '../assets/img/08.jpg'
import { Box, Button, TextInput, Text } from 'grommet';
import { Link } from 'react-router-dom';

export const SleekInput = (props) => (
  <TextInput
    style={{
      background: '#FFF7F2',
      border: 'none',
      borderBottom: '1px solid #dfe7f1',
      padding: '0 .75rem 0 0',
      height: '42px',
      maxWidth: '300px'
    }}
    {...props}
    />
);


export const FormButton = (props) => (
  <Button
    style={{
      borderRadius: '30px',
      color: '#ff6a00',
      width: '200px'
    }}
    {...props}
    />
);

export const ImageContainer = (props) => (
  <Box
    style={{
      width: '58%',
      background: `url(${backgroundURL})`,
      backgroundSize: 'cover',
      borderRadius: '10px 0 0 10px'
    }}
    {...props}
    />
)

export const RegisterForm = (props) => (
  <Box
    style={{
      borderRadius: '0 10px 10px 0',
      alignItems: 'center',
      background: '#FFF7F2'
    }}
    {...props}
    />
)

export const LoginForm = (props) => (
  <Box
    style={{
      alignItems: 'center',
      margin: '0 auto',
      background: '#FFF7F2'
    }}
    {...props}
    />
)

export const InputLabel = (props) => (
  <Text
    style={{
      fontSize: '10px',
      lineHeight: '0.5',
      marginBottom: '10px'
    }}
    {...props}
    />
)

export const FooterLink = (props) => (
  <Link
    style={{
      color: '#999',
      lineHeight: '0.5',
      marginBottom: '10px',
      fontSize: '12px'
    }}
    {...props}
    />
)

export const ErrorText = (props) => (
  <Text
    style={{
      fontSize: '10px',
      color: '#ae0c0c',
      marginBottom: '10px'
    }}
    {...props}
    />
)

export const FoodModal = (props) => (
  <Box
    style={{
      paddingBottom: '0'
    }}
    {...props}
    />
)

export const BottomBar = (props) => (
  <Box
    style={{
      borderRadius: '0 0 10px 10px',
    }}
    {...props}
    />
)

export const ModalTab = (props) => (
  <Box
    style={{
      width: '50%',
      background: 'transparent',
      color: '#333',
      paddingTop: '5px'
    }}
    {...props}
    />
)
