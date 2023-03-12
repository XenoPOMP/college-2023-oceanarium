import cn from 'classnames';
import { FC } from 'react';
import styles from './AboutRestaurantPage.module.scss';
import { AboutRestaurantPageProps } from './AboutRestaurantPage.props';
import RestaurantPage from '@pages/restaurant/RestaurantPage/RestaurantPage';
import useLocalization from '@hooks/useLocalization';
import { AboutRestaurantSection } from '@localization/Localization';

const AboutRestaurantPage: FC<AboutRestaurantPageProps> = ({}) => {
  const loc = useLocalization();
  const sections = loc.restaurantPage.about.sections;

  const PageSection: FC<{
    section: AboutRestaurantSection,
  }> = ({ section }): JSX.Element => {
    return (
      <section>
        <h3>{section.title}</h3>

        <div className={cn(styles.items)}>
          {section.content.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </section>
    );
  };

  return (
    <RestaurantPage
      meta={{
        pageTitle: loc.meta.restaurant.about.title,
        pageDescription: loc.meta.restaurant.about.desc,
        keywords: loc.meta.restaurant.about.keywords,
      }}
      noMenu
    >
      <div className={cn(styles.about)}>
        {sections.map((section) => (
          <PageSection section={section} />
        ))}
      </div>
    </RestaurantPage>
  );
};

export default AboutRestaurantPage;
