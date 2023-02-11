import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { fetchPosts } from '../../store/actions/PostsActionCreators';
import { selectPosts } from '../../store/slices/PostsSlice';
import { StatusLoading } from '../../store/types';
import Post from '../Post';
import styles from './Posts.module.scss';

const Posts = () => {
  const dispatch = useAppDispatch();
  const {
    posts,
    requestData: {
      getPosts: { status, errorMessage },
    },
  } = useAppSelector(selectPosts);

  const { IS_ERROR, IS_LOADING, IS_SUCCESS } = StatusLoading;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <ul className={styles.posts}>
      {status === IS_SUCCESS &&
        posts.map((props) => <Post {...props} key={props.id} />)}
      {status === IS_LOADING && <div>Loading...</div>}
      {status === IS_ERROR && <div>Error: {errorMessage}</div>}
      {posts.length === 0 && status !== IS_LOADING && (
        <div>Данне отсутствуют</div>
      )}
    </ul>
  );
};

export default Posts;
