import cn from 'classnames';
import { FC } from 'react';
import styles from './BurgerMenu.module.scss';
import { BurgerMenuProps } from './BurgerMenu.props';
import useBoolean from '@hooks/useBoolean';
import { motion, Transition } from 'framer-motion';
import useLocalization from '@hooks/useLocalization';
import { NavLink } from 'react-router-dom';

// TODO Сделать бургер меню

const BurgerMenu: FC<BurgerMenuProps> = ({}) => {
  const { isToggled, toggle } = useBoolean(false);
  const loc = useLocalization();

  const iconAnimationTransition: Transition = {
    duration: 0.15,
    ease: 'easeOut',
  };

  return (
    <div className={cn(styles.burgerMenu)}>
      <div className={cn(styles.revealButton)} onClick={toggle}>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='18' height='18' fill='transparent' />
          <motion.rect
            animate={{
              rotate: isToggled ? 45 : 0,
              y: isToggled ? '30%' : '0',
            }}
            transition={iconAnimationTransition}
            x='1'
            y='3'
            width='16'
            height='2'
            rx='1'
            fill='black'
          />
          <motion.rect
            animate={{
              opacity: isToggled ? 0 : 1,
            }}
            transition={iconAnimationTransition}
            x='1'
            y='8'
            width='16'
            height='2'
            rx='1'
            fill='black'
          />
          <motion.rect
            animate={{
              rotate: isToggled ? -45 : 0,
              y: isToggled ? '-25%' : '0',
            }}
            transition={iconAnimationTransition}
            x='1'
            y='13'
            width='16'
            height='2'
            rx='1'
            fill='black'
          />
        </svg>
      </div>

      <motion.div
        initial={{
          height: isToggled ? 'unset' : 0,
        }}
        animate={{
          height: isToggled ? 'unset' : 0,
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
        }}
        className={cn(styles.links)}
      >
        <NavLink to={'/account/visitor'} className={cn(styles.link)}>
          {loc.nav.account}: {loc.nav.accountDropdown.visitor}
        </NavLink>

        <NavLink to={'/account/employee'} className={cn(styles.link)}>
          {loc.nav.account}: {loc.nav.accountDropdown.employee}
        </NavLink>

        <NavLink to={'/restaurant/breakfast'} className={cn(styles.link)}>
          {loc.nav.restaurant}
        </NavLink>

        <NavLink to={'/'} className={cn(styles.link, styles.blocked)}>
          {loc.nav.exhibitions}
        </NavLink>

        <NavLink to={'/'} className={cn(styles.link, styles.blocked)}>
          {loc.nav.forVisitors}
        </NavLink>

        <NavLink to={'/'} className={cn(styles.link, styles.blocked)}>
          {loc.nav.merchShop}
        </NavLink>
      </motion.div>
    </div>
  );
};

export default BurgerMenu;
