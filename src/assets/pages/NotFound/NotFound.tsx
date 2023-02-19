import React from 'react';
import Page from '@components/Page/Page';
import cn from 'classnames';
import styles from './NotFound.module.scss';
import useLocalization from '@hooks/useLocalization';
const NotFound = () => {
  const loc = useLocalization();

  return (
    <Page
      className={cn(styles.notFound)}
      meta={{
        pageTitle: loc.meta.notFoundPage.title,
        pageDescription: loc.meta.notFoundPage.desc,
        keywords: loc.meta.notFoundPage.keywords,
      }}
    >
      {loc.notFoundPage.errorLabel}
    </Page>
  );
};

export default NotFound;
