import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './GalleryOverlay.module.scss';
import { GalleryOverlayProps } from './GalleryOverlay.props';
import { changeSlide, Gallery } from '@redux/reducers/gallerySlice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { motion } from 'framer-motion';
import getUiSx from '@utils/getUiSx/getUiSx';

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

      <div className={cn(styles.imageTitle)}>{slides[currentIndex]?.title}</div>

      <div className={cn(styles.viewBlock)}></div>

      <div className={cn(styles.slider)}></div>

      <div
        className={cn(
          styles.arrowBlock,
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
