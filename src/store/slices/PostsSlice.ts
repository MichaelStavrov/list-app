import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchPosts } from '../actions/PostsActionCreators';
import { RootState } from '../index';
import { RequestData, StatusLoading } from '../types';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostState = {
  posts: Post[];
  selectedPost: Post | null;
  requestData: RequestData;
};

const initialState: PostState = {
  posts: [],
  selectedPost: null,
  requestData: {
    getPosts: {
      data: null,
      errorMessage: null,
      status: StatusLoading.IDLE,
    },
  },
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, { payload }: PayloadAction<string>) => {
      state.posts.push({
        id: Math.random(),
        body: '',
        userId: Math.random(),
        title: payload,
      });
    },
    removePost: (state, { payload }: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== payload);
    },
    selectPost: (state, { payload }: PayloadAction<number>) => {
      const post = state.posts.find((post) => post.id === payload);
      if (post) {
        state.selectedPost = state.selectedPost?.id === payload ? null : post;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchPosts.fulfilled,
        (state, { payload }: PayloadAction<Post[]>) => {
          state.posts = payload;
          state.requestData.getPosts.status = StatusLoading.IS_SUCCESS;
        }
      )
      .addCase(fetchPosts.pending, (state) => {
        state.requestData.getPosts.status = StatusLoading.IS_LOADING;
      })
      .addCase(
        fetchPosts.rejected,
        (state, { payload }: PayloadAction<unknown>) => {
          state.requestData.getPosts.errorMessage = payload as string;
          state.requestData.getPosts.status = StatusLoading.IS_ERROR;
        }
      );
  },
});

export const { addPost, removePost, selectPost } = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
