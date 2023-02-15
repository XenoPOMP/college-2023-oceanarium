import cn from 'classnames';
import { FC, useEffect } from 'react';
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
import {
  changeSlide,
  Gallery,
  setSlides,
  showGallery,
  Slide,
} from '@redux/reducers/gallerySlice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';

const BestPhotoSection: FC<BestPhotoSectionProps> = ({}) => {
  const loc = useLocalization();

  const gallery: Gallery = useSelector((state: StoreType) => state.gallery);
  const dispatch = useDispatch();

  const openGallery = (index: number) => {
    // List of images
    const images: Slide[] = [
      {
        title: 'Photo 0',
        src: itemZero,
      },
      {
        title: 'Photo 1',
        src: itemOne,
      },
      {
        title: 'Photo 2',
        src: itemTwo,
      },
      {
        title: 'Photo 3',
        src: itemThree,
      },
      {
        title: 'Photo 4',
        src: itemFour,
      },
      {
        title: 'Photo 5',
        src: itemFive,
      },
    ];

    // Show gallery
    dispatch(showGallery());
    // Set slides to best photos
    dispatch(setSlides(images));
    // Change index
    dispatch(changeSlide(index));
  };

  useEffect(() => {
    console.log(gallery);
  }, [gallery]);

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
        <img
          alt={'gallery-item-0'}
          src={itemZero}
          onClick={() => openGallery(0)}
        />
        <img
          alt={'gallery-item-1'}
          src={itemOne}
          onClick={() => openGallery(1)}
        />
        <img
          alt={'gallery-item-2'}
          src={itemTwo}
          onClick={() => openGallery(2)}
        />

        <img
          alt={'gallery-item-3'}
          src={itemThree}
          onClick={() => openGallery(3)}
        />
        <img
          alt={'gallery-item-4'}
          src={itemFour}
          onClick={() => openGallery(4)}
        />
        <img
          alt={'gallery-item-5'}
          src={itemFive}
          onClick={() => openGallery(5)}
        />
      </div>
    </section>
  );
};

export default BestPhotoSection;
