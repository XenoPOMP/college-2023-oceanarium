import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './VisitorAccountPage.module.scss';
import { VisitorAccountPageProps } from './VisitorAccountPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import VisitorAccount from '@sections/VisitorAccount/VisitorAccount';
import getUiSx from '@utils/getUiSx';
import useAuth from '@hooks/useAuth';
import useEnv from '@hooks/useEnv';
import AuthForm from '@components/AuthForm/AuthForm';
import AccessLevelChecker from '@components/AccessLevelChecker/AccessLevelChecker';

const VisitorAccountPage: FC<VisitorAccountPageProps> = ({}) => {
  const loc = useLocalization();
  const { API_URL } = useEnv();
  const { isLogged, _uid, userRole } = useAuth();

  return (
    <Page
      meta={{
        pageTitle: loc.meta.account.visitor.title,
        pageDescription: loc.meta.account.visitor.desc,
        keywords: loc.meta.account.visitor.keywords,
      }}
      className={cn(styles.visitorPage)}
      sx={getUiSx({
        cols: 5,
        maxWidth: 'unset',
      })}
      header={{
        variant: 'main',
      }}
    >
      {userRole === 'visitor' && (
        <>
          <VisitorAccount />
        </>
      )}

      <AuthForm />

      {isLogged && <AccessLevelChecker preferredRole={'visitor'} />}
    </Page>
  );
};

export default VisitorAccountPage;
