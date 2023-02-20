import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './AuthForm.module.scss';
import { AuthFormProps } from './AuthForm.props';
import useAuth from '@hooks/useAuth';
import { motion } from 'framer-motion';

const AuthForm: FC<AuthFormProps> = ({ preferredRole }) => {
  const { isLogged, _uid, userRole } = useAuth();

  const showForm = !isLogged;

  useEffect(() => {
    if (showForm) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [isLogged]);

  return (
    <motion.div
      initial={{
        opacity: showForm ? 1 : 0,
        pointerEvents: showForm ? 'all' : 'none',
      }}
      animate={{
        opacity: showForm ? 1 : 0,
        pointerEvents: showForm ? 'all' : 'none',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className={cn(styles.placeholder)}
    >
      <div className={cn(styles.form)}></div>
    </motion.div>
  );
};

export default AuthForm;
