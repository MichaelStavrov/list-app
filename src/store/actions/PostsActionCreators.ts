import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../services';

export const fetchPosts = createAsyncThunk(
  'posts/fetchAll',
  async (_, thunkApi) => {
    try {
      const resp = await axiosInstance.get('/posts?_start=0&_limit=3');

      return resp.data;
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось загрузить данные');
    }
  }
);
