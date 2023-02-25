import cn from 'classnames';
import { FC } from 'react';
import styles from './VisitBlock.module.scss';
import { VisitBlockProps } from './VisitBlock.props';
import useLocalization from '@hooks/useLocalization';
import parseDate from '@utils/parseDate';

const VisitBlock: FC<VisitBlockProps> = ({ visit }) => {
  const loc = useLocalization();
  const { visit_department, visit_pavilion, visit_date } = visit;

  const getDepartment = (): string => {
    switch (visit_department) {
      case 'pacific':
        return loc.accountPage.visitor.visitLabels.departments.pacific;

      case 'atlantic':
        return loc.accountPage.visitor.visitLabels.departments.atlantic;

      case 'indian':
        return loc.accountPage.visitor.visitLabels.departments.indian;

      case 'artic':
        return loc.accountPage.visitor.visitLabels.departments.artic;

      case 'northern':
        return loc.accountPage.visitor.visitLabels.departments.northern;

      default:
        return '----';
    }
  };

  return (
    <div className={cn(styles.block)}>
      <div>{getDepartment()}</div>

      <span className={cn(styles.pavilion)}>
        {loc.accountPage.visitor.visitLabels.pavilion.replace(
          'XX',
          `${visit_pavilion}`,
        )}
      </span>

      <div className={cn(styles.date)}>{parseDate(visit_date)}</div>
    </div>
  );
};

export default VisitBlock;
