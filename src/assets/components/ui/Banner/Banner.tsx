import cn from 'classnames';
import { FC } from 'react';
import styles from './Banner.module.scss';
import { BannerProps } from './Banner.props';

const Banner: FC<BannerProps> = ({
  background,
  width,
  height,
  noPointerEvents,
}) => {
  return (
    <div
      style={{
        background: `${background}`,
        width,
        height,
        pointerEvents: noPointerEvents === true ? 'none' : 'all',
      }}
      className={cn(styles.banner)}
    ></div>
  );
};

export default Banner;
