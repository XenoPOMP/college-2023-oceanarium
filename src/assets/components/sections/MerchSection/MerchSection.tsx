import cn from 'classnames';
import { CSSProperties, FC } from 'react';
import styles from './MerchSection.module.scss';
import { MerchSectionProps } from './MerchSection.props';
import useLocalization from '@hooks/useLocalization';
import shopBackground from '@media/backs/merch-back.png';
import shopPhoto from '@media/merch shop/shop.png';
import getUiSx from '@utils/getUiSx';

const MerchSection: FC<MerchSectionProps> = ({}) => {
  const loc = useLocalization();

  const getStyles = (): CSSProperties => {
    return {
      ...getUiSx({
        gap: 0,
      }),
      background: `url(${shopBackground})`
    } as CSSProperties;
  }

  return (
    <section
      style={getStyles()}
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
