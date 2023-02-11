import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';

import { removePost, selectPosts } from '../../store/slices/PostsSlice';
import AllowFormLayout from '../AllowFormLayout';

type RemovePostProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const RemovePost: FC<RemovePostProps> = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const { selectedPost } = useAppSelector(selectPosts);

  const onOk = useCallback(() => {
    if (selectedPost?.id) {
      dispatch(removePost(selectedPost?.id));
    }
    closeModal();
  }, [dispatch, closeModal, selectedPost?.id]);

  const onCancel = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <AllowFormLayout
      {...{
        closeModal,
        isOpen,
        onCancel,
        onOk,
        fieldName: 'remove-post',
      }}
    />
  );
};

export default RemovePost;
