import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPost } from '../../store/slices/PostsSlice';
import AllowFormLayout from '../AllowFormLayout';

type AddPostProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const AddPost: FC<AddPostProps> = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onOk = useCallback(() => {
    if (value.length > 0) {
      dispatch(addPost(value));
      setValue('');
      closeModal();
    }
  }, [dispatch, value, closeModal]);

  const onCancel = useCallback(() => {
    setValue('');
    closeModal();
  }, [closeModal]);

  return (
    <AllowFormLayout
      {...{
        closeModal,
        isOpen,
        onCancel,
        onChange,
        onOk,
        value,
        fieldName: 'add-post',
      }}
    />
  );
};

export default AddPost;
