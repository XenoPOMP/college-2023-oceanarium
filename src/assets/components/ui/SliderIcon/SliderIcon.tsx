import cn from 'classnames';
import { CSSProperties, FC } from 'react';
import styles from './SliderIcon.module.scss';
import { SliderIconProps } from './SliderIcon.props';
import { changeSlide, Gallery } from '@redux/reducers/gallerySlice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { motion } from 'framer-motion';

const SliderIcon: FC<SliderIconProps> = ({ index }) => {
  const dispatch = useDispatch();
  const { slides, currentIndex }: Gallery = useSelector(
    (state: StoreType) => state.gallery,
  );
  const slide = slides[index];

  const ICON_GAP = `16px`;
  const ICON_SIZE = `60px`;
  const IS_ACTIVE = currentIndex === index;

  const getTransform = (): string => {
    if (IS_ACTIVE) {
      return `calc(50% - (${ICON_SIZE} / 2)`;
    } else {
      const getDelta = (): string => {
        let sign = currentIndex > index ? '-' : '+';
        const delta = Math.abs(index - currentIndex);

        return `${sign} (${delta} * ${ICON_SIZE})`;
      };

      return `calc((50% - (${ICON_SIZE} / 2) ${getDelta()})`;
    }
  };

  return (
    <motion.div
      className={cn(styles.icon, IS_ACTIVE ? '' : styles.passive)}
      style={{
        left: getTransform(),
      }}
      onClick={() => dispatch(changeSlide(index))}
    >
      <img src={slide?.src} />
    </motion.div>
  );
};

export default SliderIcon;
