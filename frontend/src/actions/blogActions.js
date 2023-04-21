import {BLOG_LIST_REQUEST, BLOG_LIST_FAIL, BLOG_LIST_SUCCESS} from '../constants/blogConstants'
import axios from 'axios'

export const listBlogs = () => async(dispatch) => {
  try{
    dispatch({type: BLOG_LIST_REQUEST})
    
        const {data}  = await axios.get('/api/blog/');
        dispatch({
            type: BLOG_LIST_SUCCESS, 
            payload: data
        })

  }catch(error){
    dispatch({
        type: BLOG_LIST_FAIL,
        payload: error.response && error.response.data.detail ? error.response.data.detail: error.message,
    })
  }
}
