import cn from 'classnames';
import { FC } from 'react';
import styles from './MerchSection.module.scss';
import { MerchSectionProps } from './MerchSection.props';
import useLocalization from '@hooks/useLocalization';
import shopPhoto from '@media/merch shop/shop.png';
import getUiSx from '@utils/getUiSx/getUiSx';

const MerchSection: FC<MerchSectionProps> = ({}) => {
  const loc = useLocalization();

  return (
    <section
      style={getUiSx({
        gap: 0,
      })}
      className={cn(styles.merch)}
    >
      <div className={cn(styles.placeholder)}>
        <h2>{loc.merchSection.header}</h2>

        <img alt={'shop-photo'} src={shopPhoto} />
      </div>

      <div className={cn(styles.placeholder, styles.desc)}>
        {loc.merchSection.desc}
      </div>
    </section>
  );
};

export default MerchSection;
