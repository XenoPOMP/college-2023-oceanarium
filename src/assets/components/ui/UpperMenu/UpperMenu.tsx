import cn from 'classnames';
import styles from './UpperMenu.module.scss';
import getUiSx from '@utils/getUiSx';
import useLocalization from '@hooks/useLocalization';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '@ui/BurgerMenu/BurgerMenu';

const UpperMenu = () => {
  const loc = useLocalization();
  const { language }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );

  return (
    <>
      <nav
        className={cn(
          styles.menu,
          styles.localization,
          language === 'ru' ? styles.ru : '',
          language === 'kz' ? styles.kz : '',
        )}
        style={getUiSx({
          maxWidth: 'unset',
          gap: 0,
        })}
      >
        <div className={cn(styles.link)}>
          <span>{loc.nav.account}</span>

          <div className={cn(styles.dropdown)}>
            <NavLink to={'/account/visitor'} className={cn(styles.link)}>
              <span>{loc.nav.accountDropdown.visitor}</span>
            </NavLink>
            <NavLink to={'/account/employee'} className={cn(styles.link)}>
              <span>{loc.nav.accountDropdown.employee}</span>
            </NavLink>
          </div>
        </div>

        <NavLink to={'/restaurant/breakfast'} className={cn(styles.link)}>
          <span>{loc.nav.restaurant}</span>
        </NavLink>

        <div className={cn(styles.link, styles.blocked)}>
          <span>{loc.nav.exhibitions}</span>
        </div>

        <div className={cn(styles.link, styles.blocked)}>
          <span>{loc.nav.forVisitors}</span>
        </div>

        <div className={cn(styles.link, styles.last, styles.blocked)}>
          <span>{loc.nav.merchShop}</span>
        </div>
      </nav>

      <BurgerMenu />
    </>
  );
};

export default UpperMenu;
