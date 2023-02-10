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
import getUiSx from '@utils/getUiSx/getUiSx';
import YellowButton from '@ui/YellowButton/YellowButton';

const ExhibitionsPreview = () => {
  // prettier-ignore
  const [slide, setSlide] = useState<number>(1);
  const loc = useLocalization();

  return (
    <div className={cn(styles.preview)}>
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
          onClick={() => {
            if (slide === 0) return;

            setSlide((prevSlide) => prevSlide - 1);
          }}
        >
          <path
            d='M35.0769 18C35.0769 27.6706 27.3311 35.5 17.7885 35.5C8.24586 35.5 0.5 27.6706 0.5 18C0.5 8.32943 8.24586 0.5 17.7885 0.5C27.3311 0.5 35.0769 8.32943 35.0769 18Z'
            stroke='black'
            strokeOpacity='0.8'
          />
          <path
            d='M22.0188 7.99998L12.5 17.8995L22.0188 27.799'
            stroke='black'
            strokeOpacity='0.8'
          />
        </svg>

        <svg
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            if (slide === 2) return;

            setSlide((prevSlide) => prevSlide + 1);
          }}
        >
          <path
            d='M35.0769 18C35.0769 27.6706 27.3311 35.5 17.7885 35.5C8.24586 35.5 0.5 27.6706 0.5 18C0.5 8.32943 8.24586 0.5 17.7885 0.5C27.3311 0.5 35.0769 8.32943 35.0769 18Z'
            stroke='black'
            strokeOpacity='0.8'
          />
          <path
            d='M22.0188 7.99998L12.5 17.8995L22.0188 27.799'
            stroke='black'
            strokeOpacity='0.8'
          />
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
