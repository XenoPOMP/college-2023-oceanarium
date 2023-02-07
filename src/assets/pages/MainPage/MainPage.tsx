import Page from '@components/Page/Page';
import ExhibitionsPreview from '@components/ExhibitionsPreview/ExhibitionsPreview';
import useLocalization from '@hooks/useLocalization';

const MainPage = () => {
  const loc = useLocalization();

  return (
    <Page
      meta={{
        pageTitle: loc.meta.mainPage.title,
        pageDescription: loc.meta.mainPage.desc,
        keywords: loc.meta.mainPage.keywords,
      }}
    >
      <ExhibitionsPreview />
    </Page>
  );
};

export default MainPage;
