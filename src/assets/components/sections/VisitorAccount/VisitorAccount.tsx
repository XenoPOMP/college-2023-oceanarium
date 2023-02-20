import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './VisitorAccount.module.scss';
import { VisitorAccountProps } from './VisitorAccount.props';
import getUiSx from '@utils/getUiSx';
import useLocalization from '@hooks/useLocalization';
import { summary } from '@utils/math-utils';

const VisitorAccount: FC<VisitorAccountProps> = ({}) => {
  const loc = useLocalization();

  type Bonus = {
    value: number,
    purpose: 'visit',
    fireDate: string,
  };

  const getTotalBonuses = (bonuses: Bonus[]): number => {
    return summary(...bonuses.map((bonus) => bonus.value));
  };

  const mockBonuses: Bonus[] = [
    {
      value: 12,
      purpose: 'visit',
      fireDate: '01.01.2014',
    },
    {
      value: 12,
      purpose: 'visit',
      fireDate: '01.01.2014',
    },
    {
      value: 12,
      purpose: 'visit',
      fireDate: '01.01.2014',
    },
    {
      value: 12,
      purpose: 'visit',
      fireDate: '01.01.2014',
    },
    {
      value: 12,
      purpose: 'visit',
      fireDate: '01.01.2014',
    },
    {
      value: 12,
      purpose: 'visit',
      fireDate: '01.01.2014',
    },
  ];

  useEffect(() => {
    console.log({ totalBonuses: getTotalBonuses(mockBonuses) });
  }, []);

  return (
    <div
      style={getUiSx({
        cols: 3,
        maxWidth: 'unset',
      })}
      className={cn(styles.block)}
    >
      <div className={cn(styles.buttonPlaceholder)}>
        <button className={cn(styles.bonuses)}>
          <span>{loc.accountPage.visitor.buttons.bonuses}</span>
        </button>
      </div>

      <div className={cn(styles.buttonPlaceholder)}>
        <button>{loc.accountPage.visitor.buttons.history}</button>
      </div>

      <div className={cn(styles.buttonPlaceholder, styles.last)}>
        <button>{loc.accountPage.visitor.buttons.personalData}</button>
      </div>

      <div className={cn(styles.divider)}></div>

      <div></div>
    </div>
  );
};

export default VisitorAccount;
