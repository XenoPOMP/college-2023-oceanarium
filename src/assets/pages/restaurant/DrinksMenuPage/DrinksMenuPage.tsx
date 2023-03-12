import cn from 'classnames';
import { FC } from 'react';
import styles from './DrinksMenuPage.module.scss';
import { DrinksMenuPageProps } from './DrinksMenuPage.props';
import RestaurantPage from '@pages/restaurant/RestaurantPage/RestaurantPage';
import useLocalization from '@hooks/useLocalization';

const DrinksMenuPage: FC<DrinksMenuPageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <RestaurantPage
      menu={loc.restaurantPage.menus.drinks}
      meta={{
        pageTitle: loc.meta.restaurant.drinks.title,
        pageDescription: loc.meta.restaurant.drinks.desc,
        keywords: loc.meta.restaurant.drinks.keywords,
      }}
    />
  );
};

export default DrinksMenuPage;
