import { FC } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import DebugElement from '@providers/DebugElement/DebugElement';
import GalleryOverlay from '@components/GalleryOverlay/GalleryOverlay';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <DebugElement useDebug />
      <GalleryOverlay />

      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default GlobalProvider;
