import React from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Spacer,
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Import the Link component from React Router

const Navbar = () => {
  return (
    <Box bg="blue.500" color="white" py="3">
      <Flex maxW="1200px" mx="auto" px="4">
        <Flex align="center">
          <Image src="/logo.png" alt="Logo" w="8" h="8" mr="2" />
          <Text fontSize="lg">Blog-App</Text>
        </Flex>
        <Spacer />
        <Flex align="center">
          <Link as={RouterLink} to="/" mr="4">
            Home
          </Link>
          <Link as={RouterLink} to="/api/blogs" mr="4">
            Blogs
          </Link>
          <Button style={{border:'2px solid white'}} colorScheme="blue" as={RouterLink} to="/api/register">
            Sign Up
          </Button>
          <Button style={{border:'2px solid white',marginLeft:"10px"}} colorScheme="blue" as={RouterLink} to="/api/login">
             Sign In
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
