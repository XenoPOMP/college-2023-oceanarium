import cn from 'classnames';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={cn(styles.appHeader)}>
      <div className={cn(styles.container)}></div>
    </header>
  );
};

export default Header;
