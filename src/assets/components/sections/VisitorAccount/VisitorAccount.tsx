import cn from 'classnames';
import { FC } from 'react';
import styles from './VisitorAccount.module.scss';
import { VisitorAccountProps } from './VisitorAccount.props';
import getUiSx from '@utils/getUiSx/getUiSx';
import useLocalization from '@hooks/useLocalization';

const VisitorAccount: FC<VisitorAccountProps> = ({}) => {
  const loc = useLocalization();

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
