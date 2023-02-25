import cn from 'classnames';
import { FC } from 'react';
import styles from './VisitorBonus.module.scss';
import { VisitorBonusProps } from './VisitorBonus.props';
import useLocalization from '@hooks/useLocalization';
import parseDate from '@utils/parseDate';

const VisitorBonus: FC<VisitorBonusProps> = ({ bonus }) => {
  const loc = useLocalization();
  const { bonus_amount, bonus_purpose, bonus_date } = bonus;

  const getReason = (): string => {
    switch (bonus_purpose) {
      case 'visit':
        return loc.accountPage.visitor.bonusLabels.reasons.visit;
      default:
        return '';
    }
  };

  return (
    <div className={cn(styles.bonus)}>
      <div>
        {bonus_amount >= 0 && '+'} {bonus_amount}{' '}
        {loc.accountPage.visitor.bonusLabels.bonuses}{' '}
        <span className={cn(styles.reason)}>{getReason()}</span>
      </div>

      <div className={cn(styles.date)}>
        {loc.accountPage.visitor.bonusLabels.availableBefore}{' '}
        {parseDate(bonus_date)}
      </div>
    </div>
  );
};

export default VisitorBonus;
