import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import styles from './VisitorAccount.module.scss';
import { VisitorAccountProps } from './VisitorAccount.props';
import getUiSx from '@utils/getUiSx';
import useLocalization from '@hooks/useLocalization';
import { summary } from '@utils/math-utils';
import useAuth from '@hooks/useAuth';
import { useQuery } from 'react-query';
import { VisitorService } from '../../../../services/Visitor.service';
import CircleLoader from '@ui/CircleLoader/CircleLoader';
import VisitorBonus from '@ui/VisitorBonus/VisitorBonus';
import { AxiosError } from 'axios';

export type Bonus = {
  bonus_amount: number,
  bonus_purpose: string,
  bonus_date: string,
};

const VisitorAccount: FC<VisitorAccountProps> = ({}) => {
  const loc = useLocalization();
  const { _uid, isLogged } = useAuth();
  const { isLoading, data, error } = useQuery(
    'get visitor bonuses',
    () => VisitorService.getUserBonuses(_uid),
    {
      enabled: isLogged,
    },
  );

  enum PagesEnum {
    bonuses, history, personalData
  }
  // prettier-ignore
  const [page, setPage] = useState<PagesEnum>(0);

  const getTotalBonuses = (): number => {
    if (data) {
      return summary(...data?.data.map((bonus: Bonus) => bonus.bonus_amount));
    } else return 0;
  };

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
          className={cn(styles.bonuses)}
          onClick={() => {
            setPage(0);
          }}
        >
          <span>{loc.accountPage.visitor.buttons.bonuses}</span>
        </button>
      </div>

      <div className={cn(styles.buttonPlaceholder)}>
        <button
          onClick={() => {
            setPage(1);
          }}
        >
          {loc.accountPage.visitor.buttons.history}
        </button>
      </div>

      <div className={cn(styles.buttonPlaceholder, styles.last)}>
        <button
          onClick={() => {
            setPage(2);
          }}
        >
          {loc.accountPage.visitor.buttons.personalData}
        </button>
      </div>

      <div className={cn(styles.divider)}></div>

      {page === PagesEnum.bonuses && (
        <>
          {isLoading ? (
            <div className={cn(styles.serverMessagePlaceholder)}>
              <CircleLoader />
            </div>
          ) : !error && <>
            <div className={cn(styles.totalBonuses)}>
              <h4>
                {loc.accountPage.visitor.totalBonusesText.replace(
                  'XXXX',
                  `${getTotalBonuses()}`,
                )}
              </h4>
            </div>

            <div className={cn(styles.bonusList)}>
              {data?.data.map((bonus: Bonus, index: number) => (
                <VisitorBonus bonus={bonus} key={`bonus-${index}`} />
              ))}
            </div>
          </>}

          {error && (
            <div className={cn(styles.serverMessagePlaceholder)}>
              {(error as AxiosError).code === 'ERR_NETWORK'
                && loc.accountPage.messages.noConnectionToServer}

              {(error as AxiosError).code === '500'
                && loc.accountPage.messages.internalServerErrorMessage}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VisitorAccount;
