import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './PersonalDataTab.module.scss';
import { PersonalDataTabProps } from './PersonalDataTab.props';
import useLocalization from '@hooks/useLocalization';
import useAuth from '@hooks/useAuth';
import { useQuery } from 'react-query';
import { VisitorService } from '@services/Visitor.service';
import parentStyles from '@sections/VisitorAccount/VisitorAccount.module.scss';
import CircleLoader from '@ui/CircleLoader/CircleLoader';
import { AxiosError } from 'axios';
import getUiSx from '@utils/getUiSx';

const PersonalDataTab: FC<PersonalDataTabProps> = ({}) => {
  const loc = useLocalization();
  const { _uid } = useAuth();
  const { isLoading, error, data } = useQuery('fetch personal data for visitor', () =>
    VisitorService.getUserData(_uid),
  );

  // prettier-ignore-start
  const [surname, setSurname] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  // prettier-ignore-end

  return (
    <>
      {isLoading ? (
        <div className={cn(parentStyles.serverMessagePlaceholder)}>
          <CircleLoader />
        </div>
      ) : (
        !error && <>
          <div style={getUiSx({
            cols: 2,
            maxWidth: 'unset'
          })} className={cn(parentStyles.scrollableBlock, styles.personalData)}>
            <>
              <h4 className={cn(styles.label)}>
                {loc.accountPage.visitor.personalDataLabels.surname}
              </h4>

              <input
                value={surname}
                onChange={(event) => setSurname(event.target.value)}
                placeholder={loc.accountPage.visitor.personalDataLabels.surname}
              />

              <div className={cn(styles.preview)}>
                {data?.data.visitor_surname}{` => ${surname ? surname : data?.data.visitor_surname}`}
              </div>
            </>

            <>
              <h4 className={cn(styles.label)}>
                {loc.accountPage.visitor.personalDataLabels.name}
              </h4>

              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={loc.accountPage.visitor.personalDataLabels.name}
              />

              <div className={cn(styles.preview)}>
                {data?.data.visitor_name}{` => ${name ? name : data?.data.visitor_name}`}
              </div>
            </>

            <>
              <h4 className={cn(styles.label)}>
                {loc.accountPage.visitor.personalDataLabels.birthdate}
              </h4>

              <input placeholder={loc.accountPage.visitor.personalDataLabels.birthdate} />
            </>

            <>
              <h4 className={cn(styles.label)}>
                {loc.accountPage.visitor.personalDataLabels.login}
              </h4>

              <input
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                placeholder={loc.accountPage.visitor.personalDataLabels.login}
              />

              <div className={cn(styles.preview)}>
                {data?.data.visitor_login}{` => ${login ? login : data?.data.visitor_login}`}
              </div>
            </>

            <>
              <h4 className={cn(styles.label)}>
                {loc.accountPage.visitor.personalDataLabels.password}
              </h4>

              <input placeholder={loc.accountPage.visitor.personalDataLabels.password} />

              <div className={cn(styles.passwordPreview)}></div>

              <input placeholder={loc.accountPage.visitor.personalDataLabels.repeatPassword} />
            </>
          </div>

          <div className={cn(styles.buttonPlaceholder)}>Button here</div>
        </>
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

export default PersonalDataTab;
