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
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/Auth/action';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginSuccess = useSelector((state) => state.auth.loginSuccess);
  const loginFailure = useSelector((state) => state.auth.loginFailure);
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = () => {
    dispatch(loginUser(formData));
    
  };
  if(loginSuccess){
    navigate("/api/blogs")
}

  return (
    <Box maxW="sm" m="auto" p="4">
      <Heading mb="4">Log In</Heading>
      <Stack spacing="4">
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
        <Button colorScheme="blue" onClick={handleLogin}>
          Log In
        </Button>
        {loginSuccess && (
          <Alert status="success">
            <AlertIcon />
            Login successful
          </Alert>
        )}
        {loginFailure && (
          <Alert status="error">
            <AlertIcon />
            Login failed
          </Alert>
        )}
      </Stack>
    </Box>
  );
};

export default LoginPage;
