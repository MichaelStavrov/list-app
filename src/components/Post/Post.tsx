import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { selectPost, selectPosts } from '../../store/slices/PostsSlice';
import styles from './Post.module.scss';
import { useAppSelector } from '../../store';

type PostProps = {
  id: number;
  title: string;
};

const Post: FC<PostProps> = ({ title, id }) => {
  const dispatch = useDispatch();
  const { selectedPost } = useAppSelector(selectPosts);

  const handleClick = (id: number) => {
    dispatch(selectPost(id));
  };

  return (
    <li
      className={cn(styles.post, {
        [styles.selected]: id === selectedPost?.id,
      })}
      onClick={() => handleClick(id)}
      role='button'
    >
      {title}
    </li>
  );
};

export default Post;
