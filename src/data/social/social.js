import { FiSend } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

export const fullSocial = [
  {
    id: 1,
    name: {
      en: 'Link to telegram',
      ru: 'Ссылка на telegram',
      uk: 'Посилання на telegram',
    },
    component: FiSend,
    href: 'https://web.telegram.org/z/',
  },
  {
    id: 2,
    name: {
      en: 'Link to whatsapp',
      ru: 'Ссылка на whatsapp',
      uk: 'Посилання на whatsapp',
    },
    component: ImWhatsapp,
    href: 'https://www.whatsapp.com/?lang=ru',
  },
  {
    id: 3,
    name: {
      en: 'Link to facebook',
      ru: 'Ссылка на facebook',
      uk: 'Посилання на facebook',
    },
    component: FiFacebook,
    href: 'https://www.facebook.com/',
  },
  {
    id: 4,
    name: {
      en: 'Link to facebook',
      ru: 'Ссылка на facebook',
      uk: 'Посилання на facebook',
    },
    component: FiInstagram,
    href: 'https://www.instagram.com/',
  },
];

export const social = fullSocial.slice(0, 2);
