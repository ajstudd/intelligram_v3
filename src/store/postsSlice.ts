import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreatePostData, IPost } from 'types/posts';

export interface PostState {
  posts: IPost[];
  createPostData: ICreatePostData;
  singlePost: IPost | null;
}

const initialState: PostState = {
  posts: [],
  createPostData: {
    title: '',
    content: '',
    password: '',
    isLocked: false,
    visibleTo: [],
    images: [],
  },
  singlePost: null,
};

const postSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    addPost : (state, action: PayloadAction<IPost>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post._id !== action.payload);
    },
    setCreatePostData: (state, action: PayloadAction<Partial<ICreatePostData>>) => {
      state.createPostData = {
        ...state.createPostData,
        ...action.payload,
      }
    },
    setSinglePost: (state, action: PayloadAction<IPost>) => {
      state.singlePost = action.payload;
    },
  },
});

export const { addPost,deletePost,setCreatePostData,setPosts,setSinglePost } = postSlice.actions;

export default postSlice.reducer;
