import cn from 'classnames';
import { FC } from 'react';
import styles from './VisitorBonus.module.scss';
import { VisitorBonusProps } from './VisitorBonus.props';

const VisitorBonus: FC<VisitorBonusProps> = ({ bonus }) => {
  const { bonus_amount, bonus_purpose, bonus_date } = bonus;

  return <div className={cn(styles.bonus)}>{bonus_amount}</div>;
};

export default VisitorBonus;
