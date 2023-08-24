import React from 'react';
import { useDispatch } from 'react-redux';
import { likeBlog } from '../redux/Blogs/action';
import { Button } from '@chakra-ui/react';

const LikeButton = ({ blogId }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likeBlog(blogId));
  };

  return (
    <Button colorScheme="teal" onClick={handleLike}>
      Like
    </Button>
  );
};

export default LikeButton;
