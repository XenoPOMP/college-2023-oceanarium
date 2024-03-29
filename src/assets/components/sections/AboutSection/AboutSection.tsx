import cn from 'classnames';
import { FC } from 'react';
import styles from './AboutSection.module.scss';
import { AboutSectionProps } from './AboutSection.props';
import getUiSx from '@utils/getUiSx';
import useLocalization from '@hooks/useLocalization';
import backgroundImg from '@media/backs/aboutUs-back.png';

const AboutSection: FC<AboutSectionProps> = ({}) => {
  const loc = useLocalization();

  return (
    <section
      className={cn(styles.aboutUs)}
      style={{
        background: `url(${backgroundImg}) center`,
      }}
    >
      <div
        className={cn(styles.block)}
        style={getUiSx({
          cols: 3,
          maxWidth: 'unset',
        })}
      >
        <div className={cn(styles.menu)}>
          <h2>{loc.aboutPage.menu.header}</h2>

          <div className={cn(styles.item)}>{loc.aboutPage.menu.news}</div>

          <div className={cn(styles.item)}>{loc.aboutPage.menu.plan}</div>

          <div className={cn(styles.item)}>{loc.aboutPage.menu.faq}</div>

          <div className={cn(styles.item)}>{loc.aboutPage.menu.reviews}</div>

          <div className={cn(styles.item)}>{loc.aboutPage.menu.vacancies}</div>
        </div>

        <article>{loc.aboutPage.article}</article>
      </div>
    </section>
  );
};

export default AboutSection;
