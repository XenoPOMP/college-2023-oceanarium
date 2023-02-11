import cn from 'classnames';
import styles from './Header.module.scss';
import useLocalization from '@hooks/useLocalization';
import clockIcon from '@media/icons/clock.svg';
import phoneIcon from '@media/icons/phone-tube.svg';
import UpperMenu from '@ui/UpperMenu/UpperMenu';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { Link } from 'react-router-dom';

const Header = () => {
  const loc = useLocalization();
  const { language }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );

  return (
    <>
      <header
        className={cn(
          styles.appHeader,
          styles.localization,
          language === 'ru' ? styles.ru : '',
          language === 'kz' ? styles.kz : '',
        )}
      >
        <Link to={'/'} className={cn(styles.logo)}>
          <h1>{loc.header.logoTitle}</h1>
          <div className={cn(styles.desc)}>{loc.header.logoDesc}</div>
        </Link>

        <div className={cn(styles.contacts)}>
          <div className={cn(styles.item)}>
            <img
              src={clockIcon}
              alt={'clock-icon'}
              className={cn(styles.icon)}
            />

            <div className={cn(styles.data)}>
              <p>{loc.header.workingTime}</p>
            </div>
          </div>

          <div className={cn(styles.item)}>
            <img
              src={phoneIcon}
              alt={'phone-icon'}
              className={cn(styles.icon)}
            />

            <div className={cn(styles.data)}>
              <p>+ 7 (000) 000 - 00 - 00</p>
              <p>8 (000) 000 - 00 - 00</p>
            </div>
          </div>
        </div>
      </header>

      <UpperMenu />
    </>
  );
};

export default Header;
