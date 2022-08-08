## 🚀 Проект

### 1. Описание

Репозиторий: https://github.com/pavel-sheremet-dev/gw-bb-project

**Основной стек:**

- Gatsby.js
- Netlify CMS
- Tailwind CSS
- i18next

**Полезные ссылки для ознакомления:**

- Gatsby.js [Общий туториал](https://www.gatsbyjs.com/docs/tutorial/)
  [Передача контекста странице для динамических запросов graphql](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#modifying-pages-created-by-core-or-plugins)
  [Подключение Netlify CMS, деплой и т.д.](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-netlify-cms/)

- Netlify CMS
  [Netlify CMS, подключение, настройки](https://www.netlifycms.org/docs/gatsby/#enable-identity-and-git-gateway)
  [Документация](https://www.gatsbyjs.com/docs/tutorial/)

- Tailwind CSS

  [Подключение для Gatsby](https://tailwindcss.com/docs/guides/gatsby)
  [Документация](https://tailwindcss.com/docs/y)

- i18next

  [Плагин](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next)
  Для 17-го реакта ставим более старую версию.

### 2. Core Concepts

**Названия веток:**

**Пример**: `PS_feat_form`,

- `PS` - ваши имя и фамилия (IV - Ivan Vasylyovich и т.д.)
- `_feat_` - обозначение того, что будет делаться в ветке
- `form` - имя функционала, секции, сервиса и т.д.

**Варианты**:

- `_feat_` - добавление нового функционала (feature);
- `_fix_` - исправление каких-то ошибок (для того, чтобы сделать мелкие фиксы,
  то не нужно создавать новую ветку, но если это какие-то исправления более
  глобальные и выходят в рамки целой задачи, тогда создаём ветку);
- `_ref_` - рефакторинг кода, который выходит на уровень отдельной задачи
- `_docs_` - добавление документации, комментариев и т.д.
- `_test_` - тестирование какого-то функционала, если необходимо.

**Описание коммитов:**

Отвечает на вопрос: что делает этот коммит?

Поскольку во время написания кода, в рамках работы с одной веткой, у вас может
быть много коммитов, их также хорошо разделять по их назначению

Идентификаторы те же, что и для названия веток. Можно использовать знак `!` для
акцентирования внимания, что это важный коммит и стоит на него обратить
внимание.

**Пример**

```powershell
git commit -m "feat: add callback form markup"
```

```powershell
git commit -m "fix!: fix trouble with form validation. Value - name"
```

**Pull requests:**

Пулл реквесты делаем только в ветку `dev`. Сейчас она настроена как ветка по
умолчанию, поэтому с этим не должно быть проблем.

Описание пулл реквеста делаете немного более детальными чем коммиты. Если
считаете нужным обратить внимание на какой-то момент, укажите на это. Язык -
удобный для нас.

### 3. Работа с Git в терминале

[Ссылка на инструкцию](https://docs.google.com/document/d/1CFrp2cKnu9g94Oouw6-vY26ChWK6T_sUixHytXXJYLw/edit?usp=sharing)

### 4. Работа с проектом

1. Клонируем себе репозиторий

```powershell
git clone https://github.com/pavel-sheremet-dev/gw-bb-project.git
```

2. Выполняем установку пакетов

```powershell
npm i
```

3. Запускаем сервер, проверяем работу.

```powershell
npm start
```

или если установлен `gatsby cli`

```powershell
gatsby develop
```

4. Работаем с проектом поалгоритму описанному в
   [инструкции по работе с Git в терминале](https://docs.google.com/document/d/1CFrp2cKnu9g94Oouw6-vY26ChWK6T_sUixHytXXJYLw/edit?usp=sharing).
   Даже если вы по какой-то причине ещё не используете терминал, то алгоритм
   чётко описан.

### Подключение Gatsby и СMS Netlify

**Освновные действия.**

1. В корневой папке (на одном уровне с src), мы создаем следующую структуру:

```
|-- static
    |-- admin
        |-- config.yml
    |-- assets
```

2. Базовые настройки `config.yml`

```yml
backend:
  name: git-gateway
  repo: pavel-sheremet-dev/gw-bb-project
  branch: main
media_folder: static/assets
public_folder: /assets
```

Где `pavel-sheremet-dev/gw-bb-project` - это аккаунт и название репозитория.

3. В аккаунте Netlify в настройках сайта, нужно сделать следующее:

**Settings > Identity**, и выбрать **Enable Identity service**. **Services > Git
Gateway**, and click **Enable Git Gateway**

Есть ещё настройки доступа и другие параметры. Более детально
[тут](https://www.netlifycms.org/docs/gatsby/#header)

4. Вход в административную панель CMS выполняется со страницы сайте (открытого
   по адресу netlify или запущенного локально), по пути `/admin`

5. Нужно будет выполнить регистрацию по адресу ел. почты, на которую прийдёт
   ссылка для верификации. Поэтого есть доступ на админ-панель.

### Локализация

Для локализации используется плагин `gatsby-plugin-react-i18next` Для сборки
выбран React 17-й версии. поэтому и планин установлен более старой версии.

[Инструкция по настройке локализации](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/)

Базовые действия:

1. Добавить конфигурацию в `gatsby-config.js`
2. Создать и наполнить структуру

```
|-- locales
    |-- en
        |-- translation.json
    |-- uk
        |-- translation.json
    |-- ru
        |-- translation.json
```

3. На каждую страницу необходимо добавить запрос `graphql`

```js
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
```

В коде используем хук `useTranslation` для получения доступа к данным в
зависимости от того, какой язык сайта открыт в браузере клиента.

4. Для смены языка пишется компонент, например `LanguageSwitcher`, в ссылке выше
   об этом написано.

5. Плагин на каждую страницу добавляет контекст `language`, которые мы
   используем для конкретизации запросов в граф. Таким образом, используя
   фильтр, мы "сужаем" поиск и осуществляет локализацию данных, которые нам
   приходят с СMS.

### Телеграм API

Базовые действия:

1. С помощью `botfather` (папа всех ботов :) ) создаём новый бот и получаем
   токен этого бота.

2. Создаём группу, в которую и будут приходить сообщения по сабмиту формы.

3. В группу добавляем нашего созданного бота и даём ему права администратора

4. Используя специальный запрос
   ([ссылка на документацию](https://core.telegram.org/api)) мы получает ID
   нашей созданной группы

   ```js
   fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_ID}/getUpdates`)
     .then(res => res.json())
     .then(data => console.log(data));
   ```

5. ID группы как и токен бота, добавляем в .env файлы.

6. Используем fetch или axios для отправки сообщения.

```js
fetch(
  `${BASE_URL}/bot${TELEGRAM_BOT_ID}/sendMessage?chat_id=${TELEGRAM_GROUP_ID}&parse_mode=HTML&text=${text}`,
);
return res.ok ? res.json() : Promise.reject(new Error());
```

---

## Настройка формы:

---

Форма сделана на React Hook Form отправляется на Netlify Form с настройкой
отправки на почту.

1. Установить в проект

   ```powershell
   npm install react-hook-form @hookform/resolvers yup
   ```

   2 последних необходимы для создания схемы валидации.

2. В компоненте формы заиспортировать хук

   ```js
   import { useForm } from 'react-hook-form';
   ```

   Если будет схема валидации то еще :

   ```js
   import { yupResolver } from "@hookform/resolvers/yup";` `import * as yup from "yup";
   ```

3. Создаем схему по принципу :

   ```js
   const schema = yup
     .object({
       name: yup.string().required(),
       phone: yup.number().positive().integer().required(),
     })
     .required();
   ```

4. В компонент с формой добавляем хук деструктуризируя с него необходимые опции.
   Если будет схема то она вставляется как дефолтное свойство. Пример:

   ```js
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm({ resolver: yupResolver(schema) });
   ```

   Свойство register используется в инпутах в формате:

   ```js
   {...register('name')}
   ```

   А handleSubmit в теге form :

```js
onSubmit={handleSubmit(функция при отправке формы)}
```

5. Чтобы отправить форму на нетлифай в тег формы необходимо добавить:

   ```js
   method="post" data-netlify="true" data-netlify-honeypot="bot-field"
   ```

6. У формы должен быть атрибут name а также скрытый инпут:

   ```js
   <input type="hidden" name="form-name" value="Имя формы" />
   ```

7. Поскольку форма собирается с помощью
   [react hook form](https://react-hook-form.com/get-started#Quickstart) то для
   ее отправки необходимо использовать запрос :

   ```js
   fetch('/', {
     method: 'POST',
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: encode({ 'form-name': 'contact', ...data }),
   })
     .then(() => alert('Success'))
     .catch(error => alert(error));
   ```

8. Дополнительно добавить :

```js
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
```

9. На Netlify в **Site settings** необходимо выбрать **Forms** и включить
   настройку принятия формы. Там же можно настроить отправку результата на
   электронную почту.

10. При необходимости сбросить форму есть свойство reset. Его деструктуризируют
    из хука useForm. После отправки указать:
    ```js
    reset({ name: '', phone: '', email: '' });
    ```

---
