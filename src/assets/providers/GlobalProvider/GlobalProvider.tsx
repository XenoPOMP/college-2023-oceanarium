import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import DebugElement from '@providers/DebugElement/DebugElement';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <DebugElement useDebug />

      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default GlobalProvider;
