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
  exhibitionPreview: {
    seeMoreButton: string,
    aboutSection: {
      title: string,
      desc: string
    },
    servicesSection: {
      title: string
      swimWithFishes: string,
      lookAtFishes: string,
      laughOverFishes: string,
      doSomeDungWithFishes: string
    }
  },
  plansSection: {
    header: string,
    plans: {
      benefits: string,
      discounts: string,
      electronicTicket: string,
      prices: string,
      familyPass: string
    }
  },
  bestPhotos: {
    header: string,
    seeMoreButton: string
  },
  merchSection: {
    header: string,
    desc: string
  }
};

export default Localization;
