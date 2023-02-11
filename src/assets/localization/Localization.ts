type MetaInfo = {
  title: string,
  desc: string,
  keywords: string
}

type Localization = {
  meta: {
    mainPage: MetaInfo,
    notFoundPage: MetaInfo,
    aboutPage: MetaInfo
  }
  header: {
    logoTitle: string,
    logoDesc: string,
    workingTime: string,
  },
  nav: {
    aboutUs: string,
    restaurant: string,
    exhibitions: string,
    forVisitors: string,
    merchShop: string,
  },
  exhibitionPreview: {
    seeMoreButton: string,
    aboutSection: {
      title: string,
      desc: string,
      aboutButton: string
    },
    servicesSection: {
      title: string
      swimWithFishes: string,
      lookAtFishes: string,
      feedFishes: string,
      eatFishes: string
    },
    exhibitionsTitles: string[]
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
  },
  footer: {
    address: string,
    phoneLabel: string,
    emailLabel: string
  }
};

export default Localization;
