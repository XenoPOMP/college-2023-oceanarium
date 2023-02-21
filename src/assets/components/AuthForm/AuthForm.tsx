import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import styles from './AuthForm.module.scss';
import { AuthFormProps } from './AuthForm.props';
import useAuth from '@hooks/useAuth';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useLocalization from '@hooks/useLocalization';

const AuthForm: FC<AuthFormProps> = ({ preferredRole }) => {
  const loc = useLocalization();
  const { isLogged, _uid, userRole } = useAuth();
  const navigate = useNavigate();
  // prettier-ignore
  const [login, setLogin] = useState<string>('');
  // prettier-ignore
  const [password, setPassword] = useState<string>('');

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
      className={cn(styles.formPlaceholder)}
    >
      <div
        className={cn(styles.container, styles.goBack, styles.hoverable)}
        onClick={() => navigate(-1)}
      >
        <svg
          width='38'
          height='30'
          viewBox='0 0 38 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M36 13C37.1046 13 38 13.8954 38 15C38 16.1046 37.1046 17 36 17V13ZM0.585786 16.4142C-0.195262 15.6332 -0.195262 14.3668 0.585786 13.5858L13.3137 0.857864C14.0948 0.0768158 15.3611 0.0768158 16.1421 0.857864C16.9232 1.63891 16.9232 2.90524 16.1421 3.68629L4.82843 15L16.1421 26.3137C16.9232 27.0948 16.9232 28.3611 16.1421 29.1421C15.3611 29.9232 14.0948 29.9232 13.3137 29.1421L0.585786 16.4142ZM36 17L2 17V13L36 13V17Z'
            fill='black'
          />
        </svg>
      </div>

      <div className={cn(styles.container, styles.forForm)}>
        <div className={cn(styles.form)}>
          <h3>{loc.authForm.header}</h3>

          {preferredRole === 'visitor' && (
            <input
              placeholder={'8 (9__) ___ - __ -__'}
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
          )}

          {preferredRole === 'employee' && (
            <input
              placeholder={''}
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
          )}

          <input
            placeholder={loc.authForm.placeholders.password}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button></button>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthForm;
