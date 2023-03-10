import { FC } from 'react';
import { PageProps } from './Page.props';
import Layout from '@components/Layout/Layout';
import MetaTitle from '@components/MetaTitle/MetaTitle';
import cn from 'classnames';

const Page: FC<PageProps> = ({ meta, children, className, sx, header }) => {
  return (
    <Layout header={header} className={cn(className)} sx={sx}>
      <MetaTitle
        pageTitle={meta.pageTitle}
        pageDescription={meta.pageDescription}
        keywords={meta.keywords}
      />
      {children}
    </Layout>
  );
};

export default Page;
