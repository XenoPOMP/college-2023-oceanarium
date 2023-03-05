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
import IShift from '@type/IShift';
import parseDate from '@utils/parseDate';

enum Pages {
  shifts, awards
}

const EmployeeAccountSection: FC<EmployeeAccountSectionProps> = ({}) => {
  const loc = useLocalization();
  const { _uid } = useAuth();
  const { isLoading, error, data } = useQuery('get employee shifts for today', () => EmployeeService.getTodayShift(_uid));

  const {
    shift_date,
    shift_type,
    shift_department,
    shift_pavilion
  } = data?.data as IShift;

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

      <>
        {page === Pages.shifts && <div className={cn(styles.status)}>
          <>
            {isLoading
              ? <CircleLoader />
              : !error &&
              ((shift_date === null && shift_type === null && shift_department === null && shift_pavilion == null)
                  ?
                  <h3>{loc.accountPage.employee.statuses.noData}</h3>
                  :
                  <>
                    <h3>
                      {shift_type !== 'free-day'
                        ?
                        loc.accountPage.employee.statuses.workToday
                        :
                        loc.accountPage.employee.statuses.freeDay
                      }
                    </h3>

                    <div className={cn(styles.date)}>
                      {parseDate(shift_date)}
                    </div>
                  </>
              )
            }

            {error && (error as AxiosError).code === '500'
              && loc.accountPage.messages.internalServerErrorMessage}
          </>
        </div>}
      </>
    </section>
  );
};

export default EmployeeAccountSection;
