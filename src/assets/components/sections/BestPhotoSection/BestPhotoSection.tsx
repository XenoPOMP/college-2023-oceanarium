import cn from 'classnames';
import { FC } from 'react';
import styles from './BestPhotoSection.module.scss';
import { BestPhotoSectionProps } from './BestPhotoSection.props';
import useLocalization from '@hooks/useLocalization';
import YellowButton from '@ui/YellowButton/YellowButton';
import getUiSx from '@utils/getUiSx/getUiSx';
import itemZero from '@media/gallery/item0.png';
import itemOne from '@media/gallery/item1.png';
import itemTwo from '@media/gallery/item2.png';
import itemThree from '@media/gallery/item3.png';
import itemFour from '@media/gallery/item4.png';
import itemFive from '@media/gallery/item5.png';

const BestPhotoSection: FC<BestPhotoSectionProps> = ({}) => {
  const loc = useLocalization();

  return (
    <section
      style={getUiSx({
        maxWidth: 'unset',
        gap: 0,
      })}
      className={cn(styles.bestPhoto)}
    >
      <div className={cn(styles.placeholder, styles.title)}>
        <h2>{loc.bestPhotos.header}</h2>

        <YellowButton onClick={() => {}}>
          {loc.bestPhotos.seeMoreButton}
        </YellowButton>
      </div>

      <div
        style={getUiSx({
          cols: 3,
          rows: 2,
          gap: 0,
          maxWidth: 'unset',
        })}
        className={cn(styles.photo, styles.placeholder)}
      >
        <img alt={'gallery-item-0'} src={itemZero} />
        <img alt={'gallery-item-1'} src={itemOne} />
        <img alt={'gallery-item-2'} src={itemTwo} />

        <img alt={'gallery-item-3'} src={itemThree} />
        <img alt={'gallery-item-4'} src={itemFour} />
        <img alt={'gallery-item-5'} src={itemFive} />
      </div>
    </section>
  );
};

export default BestPhotoSection;
