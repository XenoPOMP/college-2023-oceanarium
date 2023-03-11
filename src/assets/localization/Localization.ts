type MetaInfo = {
  title: string,
  desc: string,
  keywords: string
}

type Localization = {
  meta: {
    mainPage: MetaInfo,
    notFoundPage: MetaInfo,
    aboutPage: MetaInfo,
    account: {
      visitor: MetaInfo,
      employee: MetaInfo
    },
    restaurant: {
      breakfast: MetaInfo
    },
  }
  header: {
    logoTitle: string,
    logoDesc: string,
    workingTime: string,
  },
  nav: {
    account: string,
    accountDropdown: {
      visitor: string,
      employee: string
    },
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
  },
  aboutPage: {
    menu: {
      header: string,
      news: string,
      plan: string,
      faq: string,
      reviews: string,
      vacancies: string
    },
    article: string
  },
  accountPage: {
    visitor: {
      buttons: {
        bonuses: string,
        history: string,
        personalData: string
      },
      totalBonusesText: string,
      bonusLabels: {
        bonuses: string,
        reasons: {
          visit: string
        },
        availableBefore: string
      },
      visitLabels: {
        departments: {
          pacific: string,
          atlantic: string,
          indian: string,
          artic: string,
          northern: string
        },
        pavilion: string
      },
      personalDataLabels: {
        surname: string,
        name: string,
        birthdate: string,
        login: string,
        password: string,
        repeatPassword: string,
        changeDataButton: string
      }
    },
    employee: {
      buttons: {
        shifts: string,
        awards: string,
        personal: string
      },
      statuses: {
        noData: string,
        workToday: string,
        freeDay: string
      }
    },
    messages: {
      noConnectionToServer: string,
      internalServerErrorMessage: string
    }
  },
  notFoundPage: {
    errorLabel: string
  },
  authForm: {
    header: string,
    placeholders: {
      login: string,
      password: string
    },
    buttonText: string
  },
  accessDenied: {
    label: string,
    goBackText: string
  },
  restaurantPage: {
    header: {
      buttons: {
        menu: string,
        aboutUs: string,
        breakfast: string,
        dailyMenu: string,
        corporateMenu: string,
        childrenMenu: string,
        drinks: string,
        lateBreakfast: string
      }
    }
  }
};

export default Localization;
