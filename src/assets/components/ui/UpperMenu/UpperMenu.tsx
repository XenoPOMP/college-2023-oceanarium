import cn from 'classnames';
import styles from './UpperMenu.module.scss';
import getUiSx from '@utils/getUiSx/getUiSx';
import useLocalization from '@hooks/useLocalization';

const UpperMenu = () => {
  const loc = useLocalization();

  return (
    <nav
      className={cn(styles.menu)}
      style={getUiSx({
        maxWidth: 'unset',
        gap: 0,
      })}
    >
      <div className={cn(styles.link)}>{loc.nav.aboutUs}</div>

      <div className={cn(styles.link)}>{loc.nav.restaurant}</div>

      <div className={cn(styles.link)}>{loc.nav.exhibitions}</div>

      <div className={cn(styles.link)}>{loc.nav.forVisitors}</div>

      <div className={cn(styles.link)}>{loc.nav.merchShop}</div>
    </nav>
  );
};

export default UpperMenu;
