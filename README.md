# Верстка макета - тестовое задание

Данное тестовое задание выполнялось для компании [Artsofte](https://artsofte.ru/) на должность [HTML-технолог (Верстальщик)](https://hh.ru/vacancy/45568334)  

Результат готовой верстки находится по [этому адресу](https://portfolio.xelloworld.ru/artsofte-test/).


## Начало работы
Сборка предназначена для фронтенд разработки.  

Перед стартом проекта нужно установить рабочее окружение [NodeJS](https://nodejs.org/) и [NPM](https://www.npmjs.com/).  
Для сборки проекта используется [Gulp 4](https://gulpjs.com/).  

Команда `npm i` установит пакеты из `package.json`  
После установки необходимых пакетов используется команда `gulp`, которая запускает сборку для разработки.  

## Краткое описание файловой структуры

```
├─ app                           # Директория, в которую собирается проект (создается автоматически)
├─ src                           # Исходники, ТЗ
│   ├─ assets                    # Изображения, иконки, шрифты
│   │   ├─ favicon               # Favicon сайта
│   │   ├─ fonts                 # Шрифты для сайта
│   │   └─ images                # Изображения и иконки для сайта
│   ├─ design                    # Директория для хранения всего, что связано с дизайном (макет, шрифты и т.д.)
│   ├─ html                      # HTML файлы
│   │   ├─ components            # HTML компоненты
│   │   └─ index.html            # Главный html-файл (собирается из HTML компонентов)
│   ├─ js                        # Скрипты
│   │   ├─ functions             # Готовые скрипты, типа бургер-меню и т.п.
│   │   ├─ vendors               # Библиотеки, подключаемые локально
│   │   └─ main.js               # Главный скрипт
│   └─ scss                      # Стили сайта (препроцессор sass в scss-синтаксисе)
│       ├─ components            # Стили для разных частей страницы
│       ├─ config                # SCSS-компоненты (глобальные стили, переменные и т. д.)
│       │   ├─ _fonts.scss       # Подключение шрифтов (можно использовать миксин)
│       │   ├─ _global.scss      # Глобальные стили
│       │   ├─ _mixins.scss      # Файл с миксинами
│       │   ├─ _null             # Обнуляющие стили
│       │   └─ _vars.scss        # Файл с css/scss-переменными
│       └─ style.scss            # Главный файл стилей
├─ .editorconfig                 # Настройки форматирования кода
├─ .gitignore                    # Директории и файлы, которые не должны попадать в git
├─ .stylelintrc                  # Настройки stylelint
├─ gulpfile.js                   # Настройки Gulp
├─ package.json                  # Список требуемых пакетов
└─ README.md                     # Документация
```

## Описание используемых пакетов

**[del](https://www.npmjs.com/package/del)** - удаление файлов и директорий  
**[browser-sync](https://browsersync.io/)** - создает live server, мониторит изменение файлов и автоматически обновляет браузер.  
**[gulp-sass](https://www.npmjs.com/package/gulp-sass)** - (Syntactically Awesome Stylesheets) препроцессор sass, который умеет работать с синтаксисом scss.  
**[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)** - автоматически добавляет вендорные префиксы  
**[gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries)** - автоматически группирует медиа запросы в css файле  
**[stylelint](https://www.npmjs.com/package/stylelint)** - мощный современный линтер, который поможет избежать ошибок и обеспечить соблюдение соглашений в ваших стилях  
**[stylelint-declaration-block-no-ignored-properties](https://www.npmjs.com/package/stylelint-declaration-block-no-ignored-properties)** - запрещает значения свойств, которые игнорируются из-за другого свойства в том же правиле  
**[stylelint-order](https://www.npmjs.com/package/stylelint-order)** - пакет плагинов, которые содержат правила линтинга, связанных с порядком свойств (поддерживает автоисправление (stylelint --fix))  
**[stylelint-scss](https://www.npmjs.com/package/stylelint-scss)** - правила линтинга для SCSS  
**[gulp-rename](https://www.npmjs.com/package/gulp-rename)** - переименование файлов  
**[gulp-file-include](https://www.npmjs.com/package/gulp-file-include)** - позволяет подключать файлы, а также передавать переменные  
**[gulp-uglify-es](https://www.npmjs.com/package/gulp-uglify-es)** - минификация js файлов  
**[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)** - сжатие изображений PNG, JPEG, GIF и SVG  
**[imagemin-webp](https://www.npmjs.com/package/imagemin-webp)** - плагин для gulp-imagemin, который позволяет конвертировать изображения в формат webp  
**[gulp-newer](https://www.npmjs.com/package/gulp-newer)** - плагин позволяет обрабатывать только изменившиеся файлы  
**[gulp-plumber](https://www.npmjs.com/package/gulp-plumber)** - предотвращает падение серевера при ошибках в синтаксисе  
