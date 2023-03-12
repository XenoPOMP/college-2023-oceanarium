import cn from 'classnames';
import { FC } from 'react';
import styles from './ChildrenMenuPage.module.scss';
import { ChildrenMenuPageProps } from './ChildrenMenuPage.props';
import RestaurantPage from '@pages/restaurant/RestaurantPage/RestaurantPage';
import useLocalization from '@hooks/useLocalization';

const ChildrenMenuPage: FC<ChildrenMenuPageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <RestaurantPage
      menu={loc.restaurantPage.menus.children}
      meta={{
        pageTitle: loc.meta.restaurant.children.title,
        pageDescription: loc.meta.restaurant.children.desc,
        keywords: loc.meta.restaurant.children.keywords,
      }}
    />
  );
};

export default ChildrenMenuPage;
