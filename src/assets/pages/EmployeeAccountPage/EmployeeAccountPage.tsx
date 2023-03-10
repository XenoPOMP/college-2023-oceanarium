import cn from 'classnames';
import { FC } from 'react';
import styles from './EmployeeAccountPage.module.scss';
import { EmployeeAccountPageProps } from './EmployeeAccountPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import EmployeeAccountSection from '@sections/EmployeeAccountSection/EmployeeAccountSection';
import getUiSx from '@utils/getUiSx';
import AuthForm from '@components/AuthForm/AuthForm';
import AccessLevelChecker from '@components/AccessLevelChecker/AccessLevelChecker';
import useAuth from '@hooks/useAuth';

const EmployeeAccountPage: FC<EmployeeAccountPageProps> = ({}) => {
  const loc = useLocalization();
  const { isLogged, userRole } = useAuth();

  return (
    <Page
      meta={{
        pageTitle: loc.meta.account.employee.title,
        pageDescription: loc.meta.account.employee.desc,
        keywords: loc.meta.account.employee.keywords,
      }}
      sx={getUiSx({
        cols: 5,
        maxWidth: 'unset',
      })}
      className={cn(styles.page)}
      header={{
        variant: 'main',
      }}
    >
      {userRole === 'employee' && (
        <>
          <EmployeeAccountSection />
        </>
      )}

      <AuthForm />

      {isLogged && <AccessLevelChecker preferredRole={'employee'} />}
    </Page>
  );
};

export default EmployeeAccountPage;
