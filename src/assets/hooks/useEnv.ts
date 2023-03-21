export type TestingMode = 'FRONTEND' | 'BACKEND' | 'FULLSTACK';

export interface Env extends ImportMetaEnv {
  API_URL?: string;
  TESTING_MODE?: TestingMode;
}

const useEnv = (): Env => {
  const env = import.meta.env;

  return {
    ...env,
    API_URL: env.VITE_API_URL,
    TESTING_MODE: env.VITE_TESTING_MODE,
  };
};

export default useEnv;
