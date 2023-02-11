import React, { FC } from 'react';
import { useAppSelector } from '../../store';

import { selectPosts } from '../../store/slices/PostsSlice';
import Button from '../Button';
import styles from './PostControls.module.scss';

type PostControlsProps = {
  openAddPostModal: () => void;
  openRemovePostModal: () => void;
};

const PostControls: FC<PostControlsProps> = ({
  openAddPostModal,
  openRemovePostModal,
}) => {
  const { selectedPost } = useAppSelector(selectPosts);

  return (
    <div className={styles.controls}>
      <Button onClick={openAddPostModal}>Добавить</Button>
      <Button
        variant='danger'
        onClick={openRemovePostModal}
        disabled={!selectedPost?.id}
      >
        Удалить
      </Button>
    </div>
  );
};

export default PostControls;
