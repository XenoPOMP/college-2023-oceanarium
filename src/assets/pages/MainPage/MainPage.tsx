import Page from '@components/Page/Page';
import ExhibitionsPreview from '@components/ExhibitionsPreview/ExhibitionsPreview';
import useLocalization from '@hooks/useLocalization';
import Plans from '@components/Plans/Plans';

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

      <Plans />
    </Page>
  );
};

export default MainPage;
