import cn from 'classnames';
import { FC } from 'react';
import styles from './AboutSection.module.scss';
import { AboutSectionProps } from './AboutSection.props';
import getUiSx from '@utils/getUiSx/getUiSx';
import useLocalization from '@hooks/useLocalization';

const AboutSection: FC<AboutSectionProps> = ({}) => {
  const loc = useLocalization();

  return (
    <section className={cn(styles.aboutUs)}>
      <div
        className={cn(styles.block)}
        style={getUiSx({
          cols: 3,
          maxWidth: 'unset',
        })}
      >
        <div className={cn(styles.menu)}>
          <h2>{loc.aboutPage.menu.header}</h2>
        </div>

        <article>{loc.aboutPage.article}</article>
      </div>
    </section>
  );
};

export default AboutSection;
