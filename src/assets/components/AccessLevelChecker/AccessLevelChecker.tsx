import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './AccessLevelChecker.module.scss';
import { AccessLevelCheckerProps } from './AccessLevelChecker.props';
import useLocalization from '@hooks/useLocalization';
import useAuth from '@hooks/useAuth';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AccessLevelChecker: FC<AccessLevelCheckerProps> = ({ preferredRole }) => {
  const loc = useLocalization();
  const { isLogged, userRole } = useAuth();

  const accessGranted = isLogged && userRole === preferredRole;

  useEffect(() => {
    if (!accessGranted) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [isLogged]);

  return (
    <motion.div
      initial={{
        opacity: !accessGranted ? 1 : 0,
        pointerEvents: !accessGranted ? 'all' : 'none',
      }}
      animate={{
        opacity: !accessGranted ? 1 : 0,
        pointerEvents: !accessGranted ? 'all' : 'none',
      }}
      transition={{
        duration: 0,
      }}
      className={cn(styles.accessChecker)}
    >
      <h2>{loc.accessDenied.label}</h2>

      <Link to={'/'} className={cn(styles.goBack)}>
        {loc.accessDenied.goBackText}
      </Link>
    </motion.div>
  );
};

export default AccessLevelChecker;
