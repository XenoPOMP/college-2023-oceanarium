import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import Header from '@ui/Header/Header';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <GlobalProvider>
      <Header />

      <main style={{ height: '3000px' }}>{children}</main>
    </GlobalProvider>
  );
};

export default Layout;
