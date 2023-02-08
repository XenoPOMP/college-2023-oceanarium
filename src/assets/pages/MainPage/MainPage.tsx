import Page from '@components/Page/Page';
import ExhibitionsPreview from '@sections/ExhibitionsPreview/ExhibitionsPreview';
import useLocalization from '@hooks/useLocalization';
import Plans from '@sections/Plans/Plans';
import BestPhotoSection from '@sections/BestPhotoSection/BestPhotoSection';
import MerchSection from '@sections/MerchSection/MerchSection';

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

      <BestPhotoSection />

      <MerchSection />
    </Page>
  );
};

export default MainPage;
