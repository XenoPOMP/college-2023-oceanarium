import cn from 'classnames';
import styles from './UpperMenu.module.scss';
import getUiSx from '@utils/getUiSx/getUiSx';
import useLocalization from '@hooks/useLocalization';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';

const UpperMenu = () => {
  const loc = useLocalization();
  const { language }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );

  return (
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
      <div className={cn(styles.link)}>{loc.nav.account}</div>

      <div className={cn(styles.link)}>{loc.nav.restaurant}</div>

      <div className={cn(styles.link)}>{loc.nav.exhibitions}</div>

      <div className={cn(styles.link)}>{loc.nav.forVisitors}</div>

      <div className={cn(styles.link)}>{loc.nav.merchShop}</div>
    </nav>
  );
};

export default UpperMenu;
