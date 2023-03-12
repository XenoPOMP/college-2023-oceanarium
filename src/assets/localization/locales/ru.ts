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
    restaurant: {
      breakfast: {
        title: 'Завтрак | Ресторан',
        desc: '',
        keywords: '',
      },
      daily: {
        title: 'Ежедневное меню | Ресторан',
        desc: '',
        keywords: '',
      },
      corporate: {
        title: 'Фирменное меню | Ресторан',
        desc: '',
        keywords: '',
      },
      children: {
        title: 'Десткое меню | Ресторан',
        desc: '',
        keywords: '',
      },
      drinks: {
        title: 'Напитки | Ресторан',
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

      statuses: {
        noData: 'Нет информации',
        workToday: 'Сегодня на работу',
        freeDay: 'Сеглдня выходной',
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

  restaurantPage: {
    header: {
      buttons: {
        menu: 'меню',
        aboutUs: 'о нас',
        breakfast: 'Завтрак',
        dailyMenu: 'Ежедневное меню',
        corporateMenu: 'Фирменное меню',
        childrenMenu: 'Детское меню',
        drinks: 'Напитки',
        lateBreakfast: 'Поздний завтрак',
      },
    },
    menus: {
      breakfast: {
        title: 'Завтрак',
        categories: [
          {
            title: 'Первые блюда',
            positions: [
              {
                name:
                  'Взбитый тофу с засахаренным чесноком, радиолой и зеленым луком, грибами ' +
                  'хереса, соусом поблано и укропом, лавашом с тыквенными семечками и сумахом',
                price: 30,
              },
              {
                name:
                  'Печень и почки кролика, картофельный салат, цикорий, бекон и ' +
                  'яблочный уксус, соус равиготе',
                price: 8,
              },
              {
                name:
                  "Домашние тальятелле с грибами, сыром Луи д'Ор, диким перцем, " +
                  'засахаренным яичным желтком и чипсами из капусты',
                price: 8,
              },
            ],
          },
          {
            title: 'Вторые блюда',
            positions: [
              {
                name:
                  'Баклажаны, жареный сладкий картофель, помидоры, нут, ' +
                  'сыр Пенингуен, заправка из оливок, кедровые орехи и перец',
                price: 12,
              },
              {
                name: 'Куриное бедро по-петушиному с вином, корнеплодами и морковным пюре',
                price: 12,
              },
              {
                name:
                  'Шарлевуа, черный рис, красная свекла, эдамам, капуста, ' +
                  'армилляр, сливочное и луковое масло',
                price: 12,
              },
            ],
          },
          {
            title: 'Напитки',
            positions: [
              {
                name: 'Фильтрованный кофе',
                price: 3,
              },
              {
                name: 'Чай',
                price: 1,
              },
            ],
          },
        ],
      },
      daily: {
        title: 'ЕЖЕДНЕВНОЕ МЕНЮ',
        categories: [
          {
            title: 'Первые блюда',
            positions: [
              {
                name: 'Суп дня',
                price: 15,
              },
              {
                name: 'Солянка «Домашняя» с мясом со сметаной',
                price: 30,
              },
              {
                name: 'Щи «Петровские»',
                price: 8,
              },
              {
                name: 'Суп-пюре из овощей с гренками',
                price: 5,
              },
              {
                name: 'Каша пшенная с изюмом «Боярская»',
                price: 10,
              },
            ],
          },
          {
            title: 'Вторые блюда',
            positions: [
              {
                name: 'Треска «Пескария»',
                price: 40,
              },
              {
                name: 'Жульен мясной',
                price: 20,
              },
              {
                name: 'Оладьи из печени',
                price: 9,
              },
            ],
          },
          {
            title: 'Напитки',
            positions: [
              {
                name: 'Фильтрованный кофе',
                price: 3,
              },
              {
                name: 'Чай',
                price: 1,
              },
              {
                name: 'Компот из сливы',
                price: 2,
              },
            ],
          },
        ],
      },
      corporate: {
        title: 'ФИРМЕННОЕ МЕНЮ',
        categories: [
          {
            title: '',
            positions: [
              {
                name: 'Свинина с фасолью под фирменным соусом',
                price: 3,
              },
              {
                name: 'Салат “Особый”',
                price: 3,
              },
              {
                name: 'Ещё чойто',
                price: 3,
              },
              {
                name: 'Суп с финиками и мясом крокодила',
                price: 3,
              },
              {
                name: 'Пюре из лосося',
                price: 3,
              },
            ],
          },
        ],
      },
      children: {
        title: 'ДЕТСКОЕ МЕНЮ',
        categories: [
          {
            title: '',
            positions: [
              {
                name: 'Детское пюре “Гугу - гага”',
                price: 30,
              },
              {
                name: 'Сок детский “Жидкий нефор”',
                price: 30,
              },
            ],
          },
        ],
      },
      drinks: {
        title: 'НАПИТКИ',
        categories: [
          {
            title: 'Горячие',
            positions: [
              {
                name: 'Чай',
                price: 1,
              },
              {
                name: 'Кофе',
                price: 1,
              },
            ],
          },
          {
            title: 'Холодные',
            positions: [
              {
                name: 'Blonde du Cochon',
                price: 7,
              },
              {
                name: 'Lager',
                price: 7,
              },
              {
                name: 'IPA du Nord-Est',
                price: 7,
              },
            ],
          },
        ],
      },
    },
  },
};

export default ru;
