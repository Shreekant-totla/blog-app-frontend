
import { FETCH_BLOGS_SUCCESS, FETCH_BLOGS_FAILURE, CREATE_BLOG_SUCCESS, EDIT_BLOG_SUCCESS, DELETE_BLOG_SUCCESS, LIKE_BLOG_SUCCESS, COMMENT_BLOG_SUCCESS, SEARCH_BLOGS_SUCCESS, FILTER_BLOGS_SUCCESS, SORT_BLOGS_SUCCESS } from '../actionTypes';

const initialState = {
  blogs: [],
  error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BLOGS_SUCCESS:
        return {
          ...state,
          blogs: action.blogs,
        };
        case FETCH_BLOGS_FAILURE:
            return { ...state, error: true };
      case CREATE_BLOG_SUCCESS:
        return {
          ...state,
          blogs: [...state.blogs, action.blog],
        };
      case EDIT_BLOG_SUCCESS:
        return {
          ...state,
          blogs: state.blogs.map((blog) =>
            blog._id === action.blog._id ? action.blog : blog
          ),
        };
      case DELETE_BLOG_SUCCESS:
        return {
          ...state,
          blogs: state.blogs.filter((blog) => blog._id !== action.blogId),
        };
      case LIKE_BLOG_SUCCESS:
        return {
          ...state,
          blogs: state.blogs.map((blog) =>
            blog._id === action.blogId
              ? { ...blog, likes: blog.likes + 1 }
              : blog
          ),
        };
      case COMMENT_BLOG_SUCCESS:
        return {
          ...state,
          blogs: state.blogs.map((blog) =>
            blog._id === action.blogId
              ? { ...blog, comments: [...blog.comments, action.comment] }
              : blog
          ),
        };
        case SEARCH_BLOGS_SUCCESS:
            return {
              ...state,
              blogs: action.searchResults,
            };
          case FILTER_BLOGS_SUCCESS:
            return {
              ...state,
              blogs: action.filteredBlogs,
            };
          case SORT_BLOGS_SUCCESS:
            return {
              ...state,
              blogs: action.sortedBlogs,
            };
  
      default:
        return state;
    }
  };
  
  export default reducer;