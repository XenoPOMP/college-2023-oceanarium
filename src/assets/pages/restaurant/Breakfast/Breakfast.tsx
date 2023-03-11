import { FC } from 'react';
import { BreakfastProps } from './Breakfast.props';
import useLocalization from '@hooks/useLocalization';
import RestaurantPage from '@pages/restaurant/RestaurantPage/RestaurantPage';

const Breakfast: FC<BreakfastProps> = ({}) => {
  const loc = useLocalization();

  return (
    <RestaurantPage
      menu={loc.restaurantPage.menus.breakfast}
      meta={{
        pageTitle: loc.meta.restaurant.breakfast.title,
        pageDescription: loc.meta.restaurant.breakfast.desc,
        keywords: loc.meta.restaurant.breakfast.keywords,
      }}
    />
  );
};

export default Breakfast;
