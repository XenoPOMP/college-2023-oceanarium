import { FC } from 'react';
import { DailyMenuPageProps } from './DailyMenuPage.props';
import RestaurantPage from '@pages/restaurant/RestaurantPage/RestaurantPage';
import useLocalization from '@hooks/useLocalization';

const DailyMenuPage: FC<DailyMenuPageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <RestaurantPage
      menu={loc.restaurantPage.menus.daily}
      meta={{
        pageTitle: loc.meta.restaurant.daily.title,
        pageDescription: loc.meta.restaurant.daily.desc,
        keywords: loc.meta.restaurant.daily.keywords,
      }}
    />
  );
};

export default DailyMenuPage;
