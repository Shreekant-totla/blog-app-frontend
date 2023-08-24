import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBlogs, filterBlogs, sortBlogs } from '../redux/Blogs/action';
import {
  Input,
  Button,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const BlogFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchBlogs(searchTerm));
  };

  const handleFilter = () => {
    dispatch(filterBlogs(selectedCategory));
  };

  const handleSort = () => {
    dispatch(sortBlogs(sortOrder));
  };

  return (
    <div>
      <FormControl>
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title"
        />
        <Button onClick={handleSearch} colorScheme="blue">
          Search
        </Button>
      </FormControl>

      <FormControl>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          placeholder="Select Category"
        >
          <option value="Business">Business</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Entertainment">Entertainment</option>
        </Select>
        <Button onClick={handleFilter} colorScheme="green">
          Filter
        </Button>
      </FormControl>

      <FormControl>
        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          placeholder="Sort Order"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </Select>
        <Button onClick={handleSort} colorScheme="purple">
          Sort
        </Button>
      </FormControl>
    </div>
  );
};

export default BlogFilters;
