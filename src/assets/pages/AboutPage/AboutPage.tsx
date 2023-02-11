import cn from 'classnames';
import { FC } from 'react';
import styles from './AboutPage.module.scss';
import { AboutPageProps } from './AboutPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import AboutSection from '@sections/AboutSection/AboutSection';

const AboutPage: FC<AboutPageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <Page
      meta={{
        pageTitle: loc.meta.aboutPage.title,
        pageDescription: loc.meta.aboutPage.desc,
        keywords: loc.meta.aboutPage.keywords,
      }}
    >
      <AboutSection />
    </Page>
  );
};

export default AboutPage;
