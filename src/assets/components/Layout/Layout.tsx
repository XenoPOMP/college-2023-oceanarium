import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import Header from '@ui/Header/Header';
import Footer from '@ui/Footer/Footer';
import cn from 'classnames';

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <GlobalProvider>
      <Header />

      <main className={cn(className)}>{children}</main>

      <Footer />
    </GlobalProvider>
  );
};

export default Layout;
