// actions.js
import axios from 'axios';
import { COMMENT_BLOG_SUCCESS, CREATE_BLOG_SUCCESS, DELETE_BLOG_SUCCESS, EDIT_BLOG_SUCCESS, FETCH_BLOGS_FAILURE, FETCH_BLOGS_SUCCESS, FILTER_BLOGS_SUCCESS, LIKE_BLOG_SUCCESS, SEARCH_BLOGS_SUCCESS, SORT_BLOGS_SUCCESS } from '../actionTypes';

const fetchBlogsSuccess = (blogs) => ({
  type: FETCH_BLOGS_SUCCESS,
  payload: blogs,
});

const fetchBlogsFailure = () => ({
  type: FETCH_BLOGS_FAILURE,

});

export const createBlogSuccess = (blog) => {
    return {
      type: CREATE_BLOG_SUCCESS,
      blog,
    };
  };
  
  export const editBlogSuccess = (blog) => {
    return {
      type: EDIT_BLOG_SUCCESS,
      blog,
    };
  };
  
  export const deleteBlogSuccess = (blogId) => {
    return {
      type: DELETE_BLOG_SUCCESS,
      blogId,
    };
  };
  
  export const likeBlogSuccess = (blogId) => {
    return {
      type: LIKE_BLOG_SUCCESS,
      blogId,
    };
  };
  
  export const commentBlogSuccess = (blogId, comment) => {
    return {
      type: COMMENT_BLOG_SUCCESS,
      blogId,
      comment,
    };
  };
  
  export const searchBlogsSuccess = (searchResults) => {
    return {
      type: SEARCH_BLOGS_SUCCESS,
      searchResults,
    };
  };
  
  export const filterBlogsSuccess = (filteredBlogs) => {
    return {
      type: FILTER_BLOGS_SUCCESS,
      filteredBlogs,
    };
  };
  
  export const sortBlogsSuccess = (sortedBlogs) => {
    return {
      type: SORT_BLOGS_SUCCESS,
      sortedBlogs,
    };
  };
  
  // ... Other action creators
  
  export const searchBlogs = (searchTerm) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`https://blog-app-c6bi.onrender.com/api/blogs?title=${searchTerm}`);
        dispatch(searchBlogsSuccess(response.data.blogs));
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const filterBlogs = (category) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`https://blog-app-c6bi.onrender.com/api/blogs?category=${category}`);
        dispatch(filterBlogsSuccess(response.data.blogs));
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const sortBlogs = (order) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`https://blog-app-c6bi.onrender.com/api/blogs?sort=date&order=${order}`);
        dispatch(sortBlogsSuccess(response.data.blogs));
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const createBlog = (blogData) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('https://blog-app-c6bi.onrender.com/api/blogs', blogData);
        dispatch(createBlogSuccess(response.data.blog));
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const editBlog = (blogId, blogData) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(`https://blog-app-c6bi.onrender.com/api/blogs/${blogId}`, blogData);
        dispatch(editBlogSuccess(response.data.blog));
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const deleteBlog = (blogId) => {
    return async (dispatch) => {
      try {
        await axios.delete(`https://blog-app-c6bi.onrender.com/api/blogs/${blogId}`);
        dispatch(deleteBlogSuccess(blogId));
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const likeBlog = (blogId) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(`https://blog-app-c6bi.onrender.com/api/blogs/${blogId}/like`);
        dispatch(likeBlogSuccess(blogId));
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const commentBlog = (blogId, comment) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(`https://blog-app-c6bi.onrender.com/api/blogs/${blogId}/comment`, { comment });
        dispatch(commentBlogSuccess(blogId, response.data.comment));
      } catch (error) {
        console.error(error);
      }
    };
  };

export const fetchBlogs = () => async (dispatch) => {
  try {
    const response = await axios.get('https://blog-app-c6bi.onrender.com/api/blogs');
    dispatch(fetchBlogsSuccess(response.data.blogs));
  } catch (error) {
    dispatch(fetchBlogsFailure());
  }
};
