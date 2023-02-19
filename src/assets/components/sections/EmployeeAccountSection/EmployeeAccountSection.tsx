import cn from 'classnames';
import { FC } from 'react';
import styles from './EmployeeAccountSection.module.scss';
import { EmployeeAccountSectionProps } from './EmployeeAccountSection.props';
import getUiSx from '@utils/getUiSx';
import useLocalization from '@hooks/useLocalization';

const EmployeeAccountSection: FC<EmployeeAccountSectionProps> = ({}) => {
  const loc = useLocalization();

  return (
    <section
      style={getUiSx({
        cols: 5,
        gap: 0,
        maxWidth: 'unset',
      })}
      className={cn(styles.employeeAccount)}
    >
      <div className={cn(styles.stack, styles.buttons)}>
        <div className={cn(styles.button)}>
          {loc.accountPage.employee.buttons.shifts}
        </div>

        <div className={cn(styles.button)}>
          {loc.accountPage.employee.buttons.awards}
        </div>

        <div className={cn(styles.button)}>
          {loc.accountPage.employee.buttons.personal}
        </div>
      </div>
    </section>
  );
};

export default EmployeeAccountSection;
