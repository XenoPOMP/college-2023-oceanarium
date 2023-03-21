import cn from 'classnames';
import { FC } from 'react';
import styles from './BurgerMenu.module.scss';
import { BurgerMenuProps } from './BurgerMenu.props';

const BurgerMenu: FC<BurgerMenuProps> = ({}) => {
  return <div className={cn(styles.burgerMenu)}>Burger menu</div>;
};

export default BurgerMenu;
