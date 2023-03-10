import cn from 'classnames';
import { FC } from 'react';
import styles from './Breakfast.module.scss';
import { BreakfastProps } from './Breakfast.props';
import AboutSection from '@sections/AboutSection/AboutSection';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';

const Breakfast: FC<BreakfastProps> = ({}) => {
  const loc = useLocalization();

  return (
    <Page
      meta={{
        pageTitle: loc.meta.restaurant.breakfast.title,
        pageDescription: loc.meta.restaurant.breakfast.desc,
        keywords: loc.meta.restaurant.breakfast.keywords,
      }}
      header={{
        variant: 'restaurant',
      }}
    ></Page>
  );
};

export default Breakfast;
