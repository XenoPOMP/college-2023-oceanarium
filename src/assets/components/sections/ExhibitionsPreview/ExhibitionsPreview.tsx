import styles from './ExhibitionsPreview.module.scss';
import cn from 'classnames';
import exZero from '@media/exhebitions/ex_0.png';
import exOne from '@media/exhebitions/ex_1.png';
import exTwo from '@media/exhebitions/ex_2.png';
import swimmingMaskIcon from '@media/icons/swimming-mask.png';
import fishIcon from '@media/icons/fish-icon.png';
import feedFishesIcon from '@media/icons/feed-fishes.png';
import eatFishes from '@media/icons/eat-fishes-icon.png';
import { useState } from 'react';
import useLocalization from '@hooks/useLocalization';
import { motion } from 'framer-motion';
import getUiSx from '@utils/getUiSx';
import YellowButton from '@ui/YellowButton/YellowButton';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { useNavigate } from 'react-router-dom';

const ExhibitionsPreview = () => {
  // prettier-ignore
  const [slide, setSlide] = useState<number>(1);
  const slideConstraints = {
    min: 0,
    max: 2,
  };
  const loc = useLocalization();
  const { language }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );

  const navigate = useNavigate();

  return (
    <div
      className={cn(
        styles.preview,
        styles.localization,
        language === 'ru' ? styles.ru : '',
        language === 'kz' ? styles.kz : '',
      )}
    >
      <div className={cn(styles.placeholder)}>
        <h2>{loc.exhibitionPreview.exhibitionsTitles[slide]}</h2>
      </div>

      <div className={cn(styles.placeholder)}>
        <YellowButton>{loc.exhibitionPreview.seeMoreButton}</YellowButton>
      </div>

      <div className={cn(styles.placeholder, styles.switchers)}>
        <svg
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={cn(slide === slideConstraints.min ? styles.blocked : '')}
          onClick={() => {
            if (slide === slideConstraints.min) return;

            setSlide((prevSlide) => prevSlide - 1);
          }}
        >
          <g filter='url(#filter0_b_3_36)'>
            <ellipse
              cx='17.7885'
              cy='18'
              rx='17.7885'
              ry='18'
              transform='matrix(-1 0 0 1 35.5769 0)'
              fill='#D9D9D9'
              fillOpacity='0.3'
            />
            <path
              d='M0.874981 18C0.874981 27.4677 8.45712 35.125 17.7884 35.125C27.1198 35.125 34.7019 27.4677 34.7019 18C34.7019 8.53234 27.1198 0.875 17.7884 0.875C8.45712 0.875 0.874981 8.53234 0.874981 18Z'
              stroke='white'
              strokeOpacity='0.7'
              strokeWidth='1.75'
            />
            <path
              d='M13.5582 7.99998L23.0769 17.8995L13.5582 27.799'
              stroke='white'
              strokeOpacity='0.7'
              strokeWidth='1.75'
            />
          </g>
          <defs>
            <filter
              id='filter0_b_3_36'
              x='-25'
              y='-25'
              width='85.5769'
              height='86'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feGaussianBlur in='BackgroundImageFix' stdDeviation='12.5' />
              <feComposite
                in2='SourceAlpha'
                operator='in'
                result='effect1_backgroundBlur_3_36'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_backgroundBlur_3_36'
                result='shape'
              />
            </filter>
          </defs>
        </svg>

        <svg
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={cn(slide === slideConstraints.max ? styles.blocked : '')}
          onClick={() => {
            if (slide === slideConstraints.max) return;

            setSlide((prevSlide) => prevSlide + 1);
          }}
        >
          <g filter='url(#filter0_b_3_36)'>
            <ellipse
              cx='17.7885'
              cy='18'
              rx='17.7885'
              ry='18'
              transform='matrix(-1 0 0 1 35.5769 0)'
              fill='#D9D9D9'
              fillOpacity='0.3'
            />
            <path
              d='M0.874981 18C0.874981 27.4677 8.45712 35.125 17.7884 35.125C27.1198 35.125 34.7019 27.4677 34.7019 18C34.7019 8.53234 27.1198 0.875 17.7884 0.875C8.45712 0.875 0.874981 8.53234 0.874981 18Z'
              stroke='white'
              strokeOpacity='0.7'
              strokeWidth='1.75'
            />
            <path
              d='M13.5582 7.99998L23.0769 17.8995L13.5582 27.799'
              stroke='white'
              strokeOpacity='0.7'
              strokeWidth='1.75'
            />
          </g>
          <defs>
            <filter
              id='filter0_b_3_36'
              x='-25'
              y='-25'
              width='85.5769'
              height='86'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feGaussianBlur in='BackgroundImageFix' stdDeviation='12.5' />
              <feComposite
                in2='SourceAlpha'
                operator='in'
                result='effect1_backgroundBlur_3_36'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_backgroundBlur_3_36'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div
        style={getUiSx({
          cols: 2,
          gap: 0,
          maxWidth: 'unset',
        })}
        className={cn(styles.placeholder, styles.textContent)}
      >
        <section className={cn(styles.about)}>
          <div className={cn(styles.title)}>
            {loc.exhibitionPreview.aboutSection.title}
          </div>

          <div className={cn(styles.desc)}>
            {loc.exhibitionPreview.aboutSection.desc}
          </div>

          <YellowButton
            onClick={() => {
              navigate('about');
            }}
            isBlue
            className={cn(styles.button)}
          >
            {loc.exhibitionPreview.aboutSection.aboutButton}
          </YellowButton>
        </section>

        <section className={cn(styles.services)}>
          <div className={cn(styles.title)}>
            {loc.exhibitionPreview.servicesSection.title}
          </div>

          <div className={cn(styles.service)}>
            <div className={cn(styles.item)}>
              <img alt={'swimming-mask-icon'} src={swimmingMaskIcon} />
              <div>{loc.exhibitionPreview.servicesSection.swimWithFishes}</div>
            </div>

            <div className={cn(styles.item)}>
              <img alt={'fish-icon'} src={fishIcon} />
              <div>{loc.exhibitionPreview.servicesSection.lookAtFishes}</div>
            </div>
          </div>

          <div className={cn(styles.service)}>
            <div className={cn(styles.item)}>
              <img alt={'feed-fish-icon'} src={feedFishesIcon} />
              <div>{loc.exhibitionPreview.servicesSection.feedFishes}</div>
            </div>

            <div className={cn(styles.item)}>
              <img alt={'eat-fish-icon'} src={eatFishes} />
              <div>{loc.exhibitionPreview.servicesSection.eatFishes}</div>
            </div>
          </div>
        </section>
      </div>

      <div className={cn(styles.background)}>
        {slide === 0 && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.15,
              ease: 'easeOut',
            }}
            src={exZero}
            alt={'exhibition-one'}
          />
        )}

        {slide === 1 && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.15,
              ease: 'easeOut',
            }}
            src={exOne}
            alt={'exhibition-one'}
          />
        )}

        {slide === 2 && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.15,
              ease: 'easeOut',
            }}
            src={exTwo}
            alt={'exhibition-one'}
          />
        )}
      </div>
    </div>
  );
};

export default ExhibitionsPreview;
