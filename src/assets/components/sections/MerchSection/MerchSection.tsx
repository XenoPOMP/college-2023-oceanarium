import cn from 'classnames';
import { FC } from 'react';
import styles from './MerchSection.module.scss';
import { MerchSectionProps } from './MerchSection.props';
import useLocalization from '@hooks/useLocalization';
import shopPhoto from '@media/merch shop/shop.png';

const MerchSection: FC<MerchSectionProps> = ({}) => {
  const loc = useLocalization();

  return (
    <section className={cn(styles.merch)}>
      <div className={cn(styles.placeholder)}>
        <h2>{loc.merchSection.header}</h2>

        <img alt={'shop-photo'} src={shopPhoto} />

        <div className={cn(styles.desc)}>{loc.merchSection.desc}</div>
      </div>
    </section>
  );
};

export default MerchSection;
