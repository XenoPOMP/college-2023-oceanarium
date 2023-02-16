import cn from 'classnames';
import { FC } from 'react';
import styles from './VisitorAccountPage.module.scss';
import { VisitorAccountPageProps } from './VisitorAccountPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';

const VisitorAccountPage: FC<VisitorAccountPageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <Page
      meta={{
        pageTitle: loc.meta.account.visitor.title,
        pageDescription: loc.meta.account.visitor.desc,
        keywords: loc.meta.account.visitor.keywords,
      }}
      className={cn(styles.visitorPage)}
    ></Page>
  );
};

export default VisitorAccountPage;
