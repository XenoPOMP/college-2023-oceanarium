import Localization from '@localization/Localization';

const ru: Localization = {
  meta: {
    mainPage: {
      title: 'Главная',
      desc: '',
      keywords: '',
    },
    notFoundPage: {
      title: 'Ошибка 404',
      desc: '',
      keywords: '',
    },
    aboutPage: {
      title: 'О нас',
      desc: '',
      keywords: '',
    },
    account: {
      visitor: {
        title: 'Личный кабинет',
        desc: '',
        keywords: '',
      },

      employee: {
        title: 'Личный кабинет',
        desc: '',
        keywords: '',
      },
    },
  },

  header: {
    logoTitle: 'Моря Талдыкоргана',
    logoDesc: 'Океанариум',
    workingTime: 'Пн - Пт с 7:00 до 18:00',
  },

  nav: {
    account: 'Личный кабинет',
    accountDropdown: {
      visitor: 'Посетитель',
      employee: 'Сотрудник',
    },
    restaurant: 'Ресторан',
    exhibitions: 'Выставки',
    forVisitors: 'Для посетителей',
    merchShop: 'Магазин сувениров',
  },

  exhibitionPreview: {
    seeMoreButton: 'Узнать подробнее',
    aboutSection: {
      title: 'ОБ ОКЕАНАРИУМЕ',
      desc:
        'Талдыкорганский Океанариум – это своеобразный «подводный музей» с живыми ' +
        'экспонатами – обитателями водной среды. Располагается в ТЦ «Фараон» по ' +
        'адресу ул. Асланбека, д. 88.',
      aboutButton: 'Подробнее о нас',
    },
    servicesSection: {
      title: 'МЫ ПРЕДЛАГАЕМ',
      swimWithFishes: 'Поплавать с рыбками',
      lookAtFishes: 'Посмотреть на рыбок',
      feedFishes: 'Покормить рыбок',
      eatFishes: 'Покушать рыбок',
    },
    exhibitionsTitles: [
      'Знакомство с подводными обитателями',
      'Самые необычные обитатели коралловых рифов',
      'Красивейшие экспозиции океанов и рек',
    ],
  },

  plansSection: {
    header: 'ТАРИФЫ',
    plans: {
      benefits: 'Льготы',
      discounts: 'Акции и скидки',
      electronicTicket: 'Электронный билет в Талдыканариум',
      prices: 'Цены',
      familyPass: 'Семейный абонемент выходного дня',
    },
  },

  bestPhotos: {
    header: 'ЛУЧШИЕ ФОТО',
    seeMoreButton: 'Посмотреть все',
  },

  merchSection: {
    header: 'НАШ МАГАЗИН СУВЕНИРОВ',
    desc:
      'В нашем магазине Вы можете приобрести морские сувениры на память о посещении ' +
      'Океанариума, а также оригинальные подарки своим друзьям и близким.',
  },

  footer: {
    address: 'Адрес: ТЦ «Фараон» по адресу ул. Асланбека, д. 88.',
    phoneLabel: 'Телефон:',
    emailLabel: 'Эл. почта:',
  },

  aboutPage: {
    menu: {
      header: 'О нас',
      news: 'Новости океанариума',
      plan: 'План океанариума',
      faq: 'FAQ',
      reviews: 'Отзывы',
      vacancies: 'Вакансии',
    },
    article:
      'Талдыкорганский Океанариум – это своеобразный «подводный музей» с живыми экспонатами – обитателями водной среды.Идея создания Океанариума принадлежит руководству ООО «БЕБР», а реализована она казахским архитектором Томом Алёновичем Хэнсоном. Открытие Океанариума состоялось 01 апреля 2001 года. Общая площадь Талдыкорганского Океанариума 500м2. Здесь расположены 28 аквариумов ёмкостью от 10 до 200 тысяч литров воды. В самом большом аквариуме установлен подводный тоннель с движущейся дорожкой длиной 20 метров. Глубина этого аквариума составляет от 3 до 5 метров, а толщина акрилового стекла – 8 см.Уникальная живая экспозиция Океанариума позволяет продемонстрировать всю красоту и сложность устройства подводного мира – коллекция содержит более тысячи экземпляров пресноводных и морских рыб, водных беспозвоночных, млекопитающих, относящихся к более 100 видам.',
  },

  accountPage: {
    visitor: {
      buttons: {
        bonuses: 'БОНУСЫ',
        history: 'ИСТОРИЯ ПОСЕЩЕНИЙ',
        personalData: 'ЛИЧНЫЕ ДАННЫЕ',
      },
      totalBonusesText: 'Доступно бонусов: XXXX',
      bonusLabels: {
        bonuses: 'бонусов',
        reasons: {
          visit: 'за посещение океанариума',
        },
        availableBefore: 'до',
      },
      visitLabels: {
        departments: {
          pacific: 'Тихоокеанский отдел',
          atlantic: 'Атлантический отдел',
          indian: 'Индийский отдел',
          artic: 'Ледовитый отдел',
          northern: 'Северный отдел',
        },
        pavilion: 'Павильон XX',
      },
      personalDataLabels: {
        surname: 'Фамилия',
        name: 'Имя',
        birthdate: 'Дата рождения',
        login: 'Логин',
        password: 'Пароль',
        repeatPassword: 'Повторите пароль',
        changeDataButton: 'Изменить данные',
      },
    },

    employee: {
      buttons: {
        shifts: 'СМЕНЫ',
        awards: 'ПРЕМИИ И ШТРАФЫ',
        personal: 'ЛИЧНЫЕ ДАННЫЕ',
      },
    },

    messages: {
      noConnectionToServer: 'Нет подключения к серверу',
      internalServerErrorMessage: 'Произошла внутренняя ошибка сервера',
    },
  },

  notFoundPage: {
    errorLabel: 'Ошибка 404: страница не найдена',
  },

  authForm: {
    header: 'Вход в личный кабинет',
    placeholders: {
      login: 'Логин',
      password: 'Пароль',
    },
    buttonText: 'Войти',
  },

  accessDenied: {
    label: 'Доступ запрещен',
    goBackText: 'Вернуться назад',
  },
};

export default ru;
