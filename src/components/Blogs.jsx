import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../redux/Blogs/action';
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <Box>
      <Heading as="h1" mb={4}>
        Blogs
      </Heading>
      <UnorderedList>
        {blogs.map((blog) => (
          <ListItem key={blog._id}>{blog.title}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Blogs;
