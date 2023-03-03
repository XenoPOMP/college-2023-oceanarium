import useEnv, { TestingMode } from '@hooks/useEnv';

const { TESTING_MODE } = useEnv();

const skipTestCondition = (mode: TestingMode): boolean => {
  return TESTING_MODE !== mode && TESTING_MODE !== 'FULLSTACK';
};

export { skipTestCondition as default };
