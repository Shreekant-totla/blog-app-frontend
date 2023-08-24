import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../redux/Blogs/action';
import { Button } from '@chakra-ui/react';

const DeleteBlog = ({ blogId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBlog(blogId));
  };

  return (
    <Button colorScheme="red" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteBlog;
