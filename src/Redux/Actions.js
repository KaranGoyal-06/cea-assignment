import { instance } from '../index';

export const DislikedPosts = (data) => {
  return {
    type: 'dislikeResult',
    payload: data
  }

}

export const LikedPosts = (data) => {
  return {
    type: 'likeResult',
    payload: data,
  }

}

export const SearchActions = (data) => {
  return {
    type: 'searchResult',
    payload: data
  }

}

export const getPosts = () => {

  return async (dispatch) => {
    try {

      let post_data = await instance.get('/posts');
      dispatch({ type: 'get_post', payload: post_data.data });

    } catch (error) { alert('Oops! Something Went Wrong') }

  }

}

