type MetaInfo = {
  title: string,
  desc: string,
  keywords: string
}

type Localization = {
  meta: {
    mainPage: MetaInfo,
    notFoundPage: MetaInfo
  }
  header: {
    logoTitle: string,
    logoDesc: string,
    workingTime: string,
  },
  nav: {
    aboutUs: string,
    contacts: string,
    exhibitions: string,
    forVisitors: string,
    merchShop: string,
  },
};

export default Localization;
