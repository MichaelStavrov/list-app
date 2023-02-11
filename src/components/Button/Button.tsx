import React, { FC, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  variant?: 'default' | 'danger';
} & React.ComponentPropsWithoutRef<'button'>;

const Button: FC<ButtonProps> = ({
  children,
  variant = 'default',
  ...rest
}) => {
  return (
    <button type='button' className={styles[variant]} {...rest}>
      {children}
    </button>
  );
};

export default Button;
