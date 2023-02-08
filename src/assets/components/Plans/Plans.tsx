import styles from './Plans.module.scss';
import cn from 'classnames';
import useLocalization from '@hooks/useLocalization';

const Plans = () => {
  const loc = useLocalization();

  return (
    <section className={cn(styles.plans)}>
      <h2>{loc.plansSection.header}</h2>

      <div className={cn(styles.links)}>
        <div className={cn(styles.link)}>{loc.plansSection.plans.benefits}</div>

        <div className={cn(styles.link)}>
          {loc.plansSection.plans.discounts}
        </div>

        <div className={cn(styles.link)}>
          {loc.plansSection.plans.electronicTicket}
        </div>

        <div className={cn(styles.link)}>{loc.plansSection.plans.prices}</div>

        <div className={cn(styles.link)}>
          {loc.plansSection.plans.familyPass}
        </div>
      </div>
    </section>
  );
};

export default Plans;
