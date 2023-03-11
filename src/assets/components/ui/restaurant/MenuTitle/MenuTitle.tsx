import cn from 'classnames';
import { FC } from 'react';
import styles from './MenuTitle.module.scss';
import { MenuTitleProps } from './MenuTitle.props';

const MenuTitle: FC<MenuTitleProps> = ({ children }) => {
  const DoubleLine = (): JSX.Element => {
    return (
      <div className={cn(styles.doubleLine)}>
        <div className={cn(styles.line)}></div>

        <div className={cn(styles.line)}></div>
      </div>
    );
  };

  return (
    <div className={cn(styles.title)}>
      <div className={cn(styles.container)}>
        <DoubleLine />

        <div className={cn(styles.content)}>{children}</div>

        <DoubleLine />
      </div>
    </div>
  );
};

export default MenuTitle;
