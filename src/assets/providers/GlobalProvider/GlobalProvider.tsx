import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import DebugElement from '@providers/DebugElement/DebugElement';
import GalleryOverlay from '@components/GalleryOverlay/GalleryOverlay';
import AuthProvider from '@providers/AuthProvider/AuthProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <DebugElement useDebug />
      <GalleryOverlay />

      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default GlobalProvider;
