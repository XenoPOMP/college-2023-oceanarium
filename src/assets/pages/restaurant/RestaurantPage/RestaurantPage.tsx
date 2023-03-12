import cn from 'classnames';
import { FC } from 'react';
import styles from './RestaurantPage.module.scss';
import { RestaurantPageProps } from './RestaurantPage.props';
import Page from '@components/Page/Page';
import fishesBack from '@media/restaurant/fishes.png';
import MenuTitle from '@ui/restaurant/MenuTitle/MenuTitle';
import MenuCategoryComponent from '@ui/restaurant/MenuCategoryComponent/MenuCategoryComponent';

const RestaurantPage: FC<RestaurantPageProps> = ({
  meta,
  children,
  menu,
  noMenu,
}) => {
  return (
    <Page
      meta={meta}
      header={{
        variant: 'restaurant',
      }}
    >
      <div
        style={{
          background: `#C3D9FB url(${fishesBack}) center`,
        }}
        className={cn(styles.restaurantPage)}
      >
        <article className={cn(styles.menu)}>
          {noMenu !== true ? (
            <>
              <MenuTitle>{menu?.title}</MenuTitle>

              {menu?.categories.map((cat) => (
                <MenuCategoryComponent category={cat} />
              ))}
            </>
          ) : (
            <>{children}</>
          )}
        </article>
      </div>
    </Page>
  );
};

export default RestaurantPage;
