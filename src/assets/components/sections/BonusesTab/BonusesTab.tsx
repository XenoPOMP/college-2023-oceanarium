import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './BonusesTab.module.scss';
import { BonusesTabProps } from './BonusesTab.props';
import { summary } from '@utils/math-utils';
import { Bonus } from '@sections/VisitorAccount/VisitorAccount';
import { useQuery } from 'react-query';
import { VisitorService } from '../../../../services/Visitor.service';
import useLocalization from '@hooks/useLocalization';
import useAuth from '@hooks/useAuth';
import CircleLoader from '@ui/CircleLoader/CircleLoader';
import VisitorBonus from '@ui/VisitorBonus/VisitorBonus';
import { AxiosError } from 'axios/index';
import parentStyles from '@components/sections/VisitorAccount/VisitorAccount.module.scss';

const BonusesTab: FC<BonusesTabProps> = ({}) => {
  const loc = useLocalization();
  const { _uid, isLogged } = useAuth();
  const { isLoading, data, error, refetch } = useQuery(
    'get visitor bonuses for tab',
    () => VisitorService.getUserBonuses(_uid),
    {
      enabled: isLogged,
    },
  );

  const getTotalBonuses = (): number => {
    if (data) {
      return summary(...data?.data.map((bonus: Bonus) => bonus.bonus_amount));
    } else return 0;
  };

  return <>
    {isLoading ? (
      <div className={cn(parentStyles.serverMessagePlaceholder)}>
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
      <div className={cn(parentStyles.serverMessagePlaceholder)}>
        {(error as AxiosError).code === 'ERR_NETWORK'
          && loc.accountPage.messages.noConnectionToServer}

        {(error as AxiosError).code === '500'
          && loc.accountPage.messages.internalServerErrorMessage}
      </div>
    )}
  </>;
};

export default BonusesTab;
