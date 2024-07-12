export const allProjects = 
      [{
        id: 2,
        name: 'Biotech-zoo',
        description: 'Коммерческий проект, написанный на Django, каждый пользователь которого может создавать страницы собственных лошадей.\
        Одной из особенностей проекта является авторизация пользователей через телеграмм бот.\
        Помимо этого, каждый пользователь приложения может заказать консультацию с врачом, связь с которым\
        происходит посредствам чата, реализованного с использованием библиотеки DjangoChannels + Redis.',
        link: 'https://biotech-zoo.online/',
        stack: 'Django, Redis, MySQL, Nginx, Git, Telegram API, Html, CSS, JavaScript, jQuery',
        images: [
          'biotechzoo/1.png',
          'biotechzoo/2.png',
          'biotechzoo/3.png',
        ]        
      },
      {
        id: 3,
        name: 'Book Diffusion',
        description: 'Амбициозный проект, созданный на FastApi идея которого заключается в предоставлении возможности пользователям\
        генерировать изображения к книгам. Анализ текста производится посредствам Chat GPT, а генерация изображения - StableDiffusion.\
        Разделеенные frontend и Backend значительно улучшают масштабируемость проекта',
        link: 'https://book-diffusion.net/',
        stack: 'FastApi, PostgreSQl, Nginx, Docker, Git, ChatGPT, Html, CSS, JavaScript',
        images: [
          'bookdiffusion/1.png',
          'bookdiffusion/2.png',
          'bookdiffusion/3.png',
        ]
      },
      {
        id: 1,
        name: 'My Surf',
        description: 'Мой первый проект. Написан на Django. Он предоставляет пользователям базу данных серф-кемпов по всему миру,\
        удобно отображаемую на Yandex карте.',
        link: 'https://mysurf.online/',
        stack: 'Django, MySQL, Ymaps-API, Html, CSS, AJAX',
        images: [
          'mysurf/1.png',
          'mysurf/2.png',
          'mysurf/3.png',
        ]
      },   
      {
        id: 4,
        name: 'Personal Web Site',
        description: 'Мотивацией к написанию персональног веб-сайта стала необходимость освоения фреймворка для \
        более качественного и быстрого написания фронтенда. Для реализации был выбран один из новейших и, на мой взгляд,\
        один из самых перспективных фреймворков для работы с frontend - Vue 3.',
        link: 'https://tikhanovskii-artem.net/',
        stack: 'Vue.js',
        images: [
          'personalwebsite/1.png',
        ]
      }
    ]
