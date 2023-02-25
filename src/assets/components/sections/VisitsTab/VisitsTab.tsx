import cn from 'classnames';
import { FC } from 'react';
import styles from './VisitsTab.module.scss';
import { VisitsTabProps } from './VisitsTab.props';
import useLocalization from '@hooks/useLocalization';
import useAuth from '@hooks/useAuth';
import { useQuery } from 'react-query';
import { VisitorService } from '@services/Visitor.service';
import parentStyles from '@sections/VisitorAccount/VisitorAccount.module.scss';
import CircleLoader from '@ui/CircleLoader/CircleLoader';
import { AxiosError } from 'axios';
import { Visit } from '@sections/VisitorAccount/VisitorAccount';
import VisitBlock from '@ui/VisitBlock/VisitBlock';

const VisitsTab: FC<VisitsTabProps> = ({}) => {
  const loc = useLocalization();
  const { _uid, isLogged } = useAuth();

  const { isLoading, error, data } = useQuery('get visitor`s visit list', () =>
    VisitorService.getUserVisits(_uid),
  );

  return (
    <>
      {isLoading ? (
        <div className={cn(parentStyles.serverMessagePlaceholder)}>
          <CircleLoader />
        </div>
      ) : (
        !error && (
          <>
            <div className={cn(parentStyles.scrollableBlock, styles.visitsTab)}>
              {(data?.data as Visit[]).map(visit => <VisitBlock visit={visit} />)}
            </div>
          </>
        )
      )}

      {error && (
        <div className={cn(parentStyles.serverMessagePlaceholder)}>
          {(error as AxiosError).code === 'ERR_NETWORK'
            && loc.accountPage.messages.noConnectionToServer}

          {(error as AxiosError).code === '500'
            && loc.accountPage.messages.internalServerErrorMessage}
        </div>
      )}
    </>
  );
};

export default VisitsTab;
