import cn from 'classnames';
import styles from './Header.module.scss';
import useLocalization from '@hooks/useLocalization';
import clockIcon from '@media/icons/clock.svg';
import phoneIcon from '@media/icons/phone-tube.svg';
import UpperMenu from '@ui/UpperMenu/UpperMenu';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { Link, NavLink } from 'react-router-dom';
import logo from '@media/logos/AI_LOGO.png';
import { FC } from 'react';
import { HeaderProps } from '@ui/Header/Header.props';
import Banner from '@ui/Banner/Banner';
import restaurantBanner from '@media/restaurant/restaurant-banner.png';

const Header: FC<HeaderProps> = ({ variant }) => {
  const loc = useLocalization();
  const { language }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );

  return (
    <>
      {variant === 'main' && (
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
              <img
                className={cn(styles.logotype)}
                src={logo}
                alt={'taldyk-logo'}
              />

              <div>
                <h1>{loc.header.logoTitle}</h1>
                <div className={cn(styles.desc)}>{loc.header.logoDesc}</div>
              </div>
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
      )}

      {variant === 'restaurant' && (
        <>
          <header className={cn(styles.restaurantHeader)}>
            <div className={cn(styles.button)}>
              {loc.restaurantPage.header.buttons.menu}
            </div>

            <NavLink to={'/'} className={cn(styles.logo)}>
              <svg
                width='45'
                height='58'
                viewBox='0 0 45 58'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  x1='15'
                  y1='13'
                  x2='15'
                  y2='57.4023'
                  stroke='black'
                  strokeWidth='4'
                />
                <line
                  y1='11.814'
                  x2='30.3261'
                  y2='11.814'
                  stroke='black'
                  strokeWidth='4'
                />
                <line
                  x1='28.3262'
                  y1='13.8141'
                  x2='28.3262'
                  y2='44.4023'
                  stroke='white'
                  strokeWidth='4'
                />
                <line
                  x1='31.7324'
                  y1='29.575'
                  x2='39.4555'
                  y2='29.575'
                  stroke='white'
                  strokeWidth='4'
                />
                <line
                  x1='43'
                  y1='-1.19154e-07'
                  x2='43'
                  y2='44.4023'
                  stroke='white'
                  strokeWidth='4'
                />
              </svg>
            </NavLink>

            <div className={cn(styles.button)}>
              {loc.restaurantPage.header.buttons.aboutUs}
            </div>
          </header>

          <Banner
            background={`url(${restaurantBanner})`}
            width={'100vw'}
            height={'285px'}
            noPointerEvents={true}
          />
        </>
      )}
    </>
  );
};

export default Header;
