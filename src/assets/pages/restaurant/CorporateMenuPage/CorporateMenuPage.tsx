import cn from 'classnames';
import { FC } from 'react';
import styles from './CorporateMenuPage.module.scss';
import { CorporateMenuPageProps } from './CorporateMenuPage.props';
import RestaurantPage from '@pages/restaurant/RestaurantPage/RestaurantPage';
import useLocalization from '@hooks/useLocalization';

const CorporateMenuPage: FC<CorporateMenuPageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <RestaurantPage
      menu={loc.restaurantPage.menus.corporate}
      meta={{
        pageTitle: loc.meta.restaurant.corporate.title,
        pageDescription: loc.meta.restaurant.corporate.desc,
        keywords: loc.meta.restaurant.corporate.keywords,
      }}
    />
  );
};

export default CorporateMenuPage;
