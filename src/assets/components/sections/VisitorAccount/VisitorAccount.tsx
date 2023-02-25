import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './VisitorAccount.module.scss';
import { VisitorAccountProps } from './VisitorAccount.props';
import getUiSx from '@utils/getUiSx';
import useLocalization from '@hooks/useLocalization';
import BonusesTab from '@sections/BonusesTab/BonusesTab';
import VisitsTab from '@sections/VisitsTab/VisitsTab';

export type Bonus = {
  bonus_amount: number,
  bonus_purpose: string,
  bonus_date: string,
};

export type Visit = {
  visit_department: string,
  visit_pavilion: number,
  visit_date: string,
};

const VisitorAccount: FC<VisitorAccountProps> = ({}) => {
  const loc = useLocalization();

  enum PagesEnum {
    bonuses, history, personalData
  }
  // prettier-ignore
  const [page, setPage] = useState<PagesEnum>(0);

  return (
    <div
      style={getUiSx({
        cols: 3,
        maxWidth: 'unset',
      })}
      className={cn(styles.block)}
    >
      <div className={cn(styles.buttonPlaceholder)}>
        <button
          className={cn(styles.bonuses, page === 0 ? styles.chosen : '')}
          onClick={() => {
            setPage(0);
          }}
        >
          <span>{loc.accountPage.visitor.buttons.bonuses}</span>
        </button>
      </div>

      <div className={cn(styles.buttonPlaceholder)}>
        <button
          className={cn(page === 1 ? styles.chosen : '')}
          onClick={() => {
            setPage(1);
          }}
        >
          {loc.accountPage.visitor.buttons.history}
        </button>
      </div>

      <div className={cn(styles.buttonPlaceholder, styles.last)}>
        <button
          className={cn(page === 2 ? styles.chosen : '')}
          onClick={() => {
            setPage(2);
          }}
        >
          {loc.accountPage.visitor.buttons.personalData}
        </button>
      </div>

      <div className={cn(styles.divider)}></div>

      {page === PagesEnum.bonuses && <BonusesTab />}

      {page === PagesEnum.history && <VisitsTab />}
    </div>
  );
};

export default VisitorAccount;
