import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/Auth/action';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatar: '', // Add avatar field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = () => {
    dispatch(registerUser(formData));
    navigate("/api/login")
  };

  return (
    <Box maxW="sm" m="auto" p="4">
      <Heading mb="4">Sign Up</Heading>
      <Stack spacing="4">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Avatar (URL)</FormLabel>
          <Input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleSignup}>
          Sign Up
        </Button>
        <Alert status="info">
          <AlertIcon />
          Already have an account?{' '}
          <Link style={{color:"blue"}} to="/api/login">
            Log in
          </Link>
        </Alert>
      </Stack>
    </Box>
  );
};

export default SignupPage;
