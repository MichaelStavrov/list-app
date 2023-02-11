import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
};

const Modal: FC<ModalProps> = ({ children, isOpen, closeModal }) => {
  return (
    <div
      className={cn(styles.modal, {
        [styles.isVisibleModal]: isOpen,
      })}
      onClick={closeModal}
    >
      <div
        className={cn(styles.modalWindow, {
          [styles.isVisibleModalWindow]: isOpen,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {isOpen && children}
      </div>
    </div>
  );
};
export default Modal;
