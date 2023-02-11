import React, { FC, memo } from 'react';

import Button from '../Button';
import Modal from '../Modal';
import styles from './AllowFormLayout.module.scss';

type AllowFormLayoutProps = {
  isOpen: boolean;
  closeModal: () => void;
  onOk: () => void;
  onCancel: () => void;
  fieldName: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AllowFormLayout: FC<AllowFormLayoutProps> = ({
  closeModal,
  isOpen,
  onCancel,
  onChange,
  onOk,
  value,
  fieldName,
}) => (
  <Modal {...{ isOpen, closeModal }}>
    <div className={styles.container}>
      {onChange && (
        <>
          <label htmlFor={fieldName}>Введите название</label>
          <input
            className={styles.textField}
            id={fieldName}
            type='text'
            value={value}
            onChange={onChange}
          />
        </>
      )}
      <div className={styles.controls}>
        <Button onClick={onOk}>Ок</Button>
        <Button variant='danger' onClick={onCancel}>
          Отменить
        </Button>
      </div>
    </div>
  </Modal>
);

export default memo(AllowFormLayout);
