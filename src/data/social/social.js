import { FiSend } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

export const fullSocial = [
  {
    id: 1,
    name: {
      en: 'Link to linkedin',
      ru: 'Ссылка на linkedin',
      uk: 'Посилання на linkedin',
    },
    component: FiLinkedin,
    href: 'https://www.linkedin.com/in/yshayenko/',
  },
  {
    id: 2,
    name: {
      en: 'Link to telegram',
      ru: 'Ссылка на telegram',
      uk: 'Посилання на telegram',
    },
    component: FiSend,
    href: 'https://web.telegram.org/z/',
  },
  {
    id: 3,
    name: {
      en: 'Link to whatsapp',
      ru: 'Ссылка на whatsapp',
      uk: 'Посилання на whatsapp',
    },
    component: ImWhatsapp,
    href: 'https://www.whatsapp.com/?lang=ru',
  },
  {
    id: 4,
    name: {
      en: 'Link to facebook',
      ru: 'Ссылка на facebook',
      uk: 'Посилання на facebook',
    },
    component: FiFacebook,
    href: 'https://www.facebook.com/Yuliya.Shayenko',
  },
  {
    id: 5,
    name: {
      en: 'Link to instagram',
      ru: 'Ссылка на instagram',
      uk: 'Посилання на instagram',
    },
    component: FiInstagram,
    href: 'https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y=',
  },
];
