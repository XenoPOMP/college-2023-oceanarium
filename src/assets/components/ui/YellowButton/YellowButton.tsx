import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './YellowButton.module.scss';
import { YellowButtonProps } from './YellowButton.props';

const YellowButton: FC<YellowButtonProps> = ({
  children,
  onClick,
  isBlue,
  className,
}) => {
  return (
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
      className={cn(styles.button, isBlue ? styles.blue : '', className)}
    >
      {children}
    </div>
  );
};

export default YellowButton;
