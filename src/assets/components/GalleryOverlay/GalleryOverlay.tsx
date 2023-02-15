import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './GalleryOverlay.module.scss';
import { GalleryOverlayProps } from './GalleryOverlay.props';
import {
  changeSlide,
  Gallery,
  hideGallery,
} from '@redux/reducers/gallerySlice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { motion } from 'framer-motion';
import SliderIcon from '@ui/SliderIcon/SliderIcon';

const GalleryOverlay: FC<GalleryOverlayProps> = ({}) => {
  const { shown, currentIndex, slides }: Gallery = useSelector(
    (state: StoreType) => state.gallery,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (shown) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [shown]);

  return (
    <motion.div
      className={cn(styles.overlay)}
      initial={{
        opacity: shown ? 1 : 0,
        pointerEvents: shown ? 'all' : 'none',
      }}
      animate={{
        opacity: shown ? 1 : 0,
        pointerEvents: shown ? 'all' : 'none',
      }}
      transition={{
        duration: 0.15,
        ease: 'easeOut',
      }}
    >
      <div
        className={cn(
          styles.arrowBlock,
          styles.hoverable,
          currentIndex === 0 ? styles.hidden : '',
        )}
        onClick={() => dispatch(changeSlide(currentIndex - 1))}
      >
        <svg
          width='38'
          height='30'
          viewBox='0 0 38 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M36 17C37.1046 17 38 16.1046 38 15C38 13.8954 37.1046 13 36 13L36 17ZM0.585787 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857862C15.3611 0.0768129 14.0948 0.0768127 13.3137 0.857861L0.585787 13.5858ZM36 13L2 13L2 17L36 17L36 13Z'
            fill='white'
          />
        </svg>
      </div>

      <div className={cn(styles.imageTitle)}>
        <div className={cn(styles.element)}></div>

        <div className={cn(styles.element)} style={{ cursor: 'default' }}>
          {slides[currentIndex]?.title}
        </div>

        <div
          className={cn(styles.element, styles.hoverable)}
          onClick={() => dispatch(hideGallery())}
        >
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.514718 0.514695C0.905243 0.124171 1.53841 0.124171 1.92893 0.514695L17.4853 16.071C17.8758 16.4616 17.8758 17.0947 17.4853 17.4853C17.0948 17.8758 16.4616 17.8758 16.0711 17.4853L0.514719 1.92891C0.124194 1.53838 0.124194 0.905219 0.514718 0.514695Z'
              fill='white'
            />
            <path
              d='M17.4851 0.5147C17.8757 0.905225 17.8757 1.53839 17.4851 1.92891L1.92879 17.4853C1.53826 17.8758 0.905097 17.8758 0.514573 17.4853C0.124049 17.0947 0.124049 16.4616 0.514573 16.071L16.0709 0.514701C16.4614 0.124176 17.0946 0.124176 17.4851 0.5147Z'
              fill='white'
            />
          </svg>
        </div>
      </div>

      <div className={cn(styles.viewBlock)}>
        <img src={slides[currentIndex]?.src} />
      </div>

      <div className={cn(styles.slider)}>
        {slides.map((slide, index) => (
          <SliderIcon index={index} />
        ))}
      </div>

      <div
        className={cn(
          styles.arrowBlock,
          styles.hoverable,
          currentIndex === slides.length - 1 ? styles.hidden : '',
        )}
        onClick={() => dispatch(changeSlide(currentIndex + 1))}
      >
        <svg
          width='38'
          height='30'
          viewBox='0 0 38 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M36 17C37.1046 17 38 16.1046 38 15C38 13.8954 37.1046 13 36 13L36 17ZM0.585787 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857862C15.3611 0.0768129 14.0948 0.0768127 13.3137 0.857861L0.585787 13.5858ZM36 13L2 13L2 17L36 17L36 13Z'
            fill='white'
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default GalleryOverlay;
