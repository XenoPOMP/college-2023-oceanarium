import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './EmployeeAccountSection.module.scss';
import { EmployeeAccountSectionProps } from './EmployeeAccountSection.props';
import getUiSx from '@utils/getUiSx';
import useLocalization from '@hooks/useLocalization';
import { useQuery } from 'react-query';
import { EmployeeService } from '@services/Employee.service';
import useAuth from '@hooks/useAuth';
import CircleLoader from '@ui/CircleLoader/CircleLoader';
import { AxiosError } from 'axios';

enum Pages {
  shifts, awards
}

const EmployeeAccountSection: FC<EmployeeAccountSectionProps> = ({}) => {
  const loc = useLocalization();
  const { _uid } = useAuth();
  const { isLoading, error } = useQuery('get employee shifts', () => EmployeeService.getShifts(_uid));

  // prettier-ignore
  const [page, setPage] = useState<Pages>(Pages.shifts);

  return (
    <section
      style={getUiSx({
        cols: 5,
        gap: 0,
        maxWidth: 'unset',
      })}
      className={cn(styles.employeeAccount)}
    >
      <div
        style={getUiSx({
          cols: 2,
          maxWidth: 'unset',
        })}
        className={cn(styles.stack, styles.buttons)}
      >
        <div onClick={() => {
          setPage(Pages.shifts)
        }} className={cn(styles.button, page === Pages.shifts ? styles.chosen : '')}>
          {loc.accountPage.employee.buttons.shifts}
        </div>

        <div onClick={() => {
          setPage(Pages.awards)
        }} className={cn(styles.button, page === Pages.awards ? styles.chosen : '')}>
          {loc.accountPage.employee.buttons.awards}
        </div>
      </div>

      <div className={cn(styles.divider)}></div>

      <div className={cn(styles.status)}>
        <>
          {isLoading
            ? <CircleLoader />
            : !error &&
              <div>
                asd
              </div>
          }

          {error && (error as AxiosError).code === '500'
            && loc.accountPage.messages.internalServerErrorMessage}
        </>
      </div>
    </section>
  );
};

export default EmployeeAccountSection;
