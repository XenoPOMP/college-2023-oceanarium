import cn from 'classnames';
import { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';
import { AppSettings, changeLang } from '@redux/reducers/appSettingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import useLocalization from '@hooks/useLocalization';
import footerPhoneIcon from '@media/icons/footer-phone-icon.png';
import envelopeIcon from '@media/icons/Envelope.png';

const Footer: FC<FooterProps> = ({}) => {
  const { language }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <footer
      className={cn(
        styles.appFooter,
        styles.localization,
        language === 'ru' && styles.ru,
        language === 'kz' && styles.kz,
      )}
    >
      <div className={cn(styles.group, styles.lang)}>
        <div
          className={cn(styles.switch, language === 'ru' ? styles.active : '')}
          onClick={() => dispatch(changeLang('ru'))}
        >
          ru
        </div>

        <svg
          width='10'
          height='10'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_28_15)'>
            <circle
              cx='1'
              cy='1'
              r='1'
              transform='matrix(1 0 0 -1 3 6)'
              fill='black'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_28_15'
              x='0'
              y='0'
              width='10'
              height='10'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='1' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_28_15'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_28_15'
                result='shape'
              />
            </filter>
          </defs>
        </svg>

        <div
          className={cn(styles.switch, language === 'kz' ? styles.active : '')}
          onClick={() => dispatch(changeLang('kz'))}
        >
          kz
        </div>
      </div>

      <div className={cn(styles.group, styles.withIcon)}>
        <svg
          width='16'
          height='22'
          viewBox='0 0 16 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='8' cy='8' r='8' fill='black' />
          <circle cx='8' cy='8' r='4' fill='white' />
          <path d='M8 22L14.9282 12.25H1.0718L8 22Z' fill='black' />
        </svg>

        {loc.footer.address}
      </div>

      <div className={cn(styles.group, styles.withIcon)}>
        <img src={footerPhoneIcon} alt={'phone-icon'} />
        {loc.footer.phoneLabel} + 7 (999) 777 - 88 - 88.
      </div>

      <div className={cn(styles.group, styles.withIcon)}>
        <img src={envelopeIcon} alt={'envelope-icon'} />
        {loc.footer.emailLabel} kms@gmail.kz
      </div>
    </footer>
  );
};

export default Footer;
