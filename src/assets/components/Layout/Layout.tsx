import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import Header from '@ui/Header/Header';
import Footer from '@ui/Footer/Footer';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <GlobalProvider>
      <Header />

      <main>{children}</main>

      <Footer />
    </GlobalProvider>
  );
};

export default Layout;
