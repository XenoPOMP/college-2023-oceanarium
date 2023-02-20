export type Env = {
  API_URL?: string,
};

const useEnv = (): Env => {
  const env = import.meta.env;

  const fetchFromEnv = (item: any): string => {
    const result = JSON.stringify(item);

    // prettier-ignore
    return result
      .replace(/^"/i, '')
      .replace(/"$/i, '');
  };

  return {
    API_URL: fetchFromEnv(env.VITE_API_URL),
  };
};

export default useEnv;
