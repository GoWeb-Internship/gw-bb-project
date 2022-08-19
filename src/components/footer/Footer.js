import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Container from 'components/reusable/Container';
import Logo from 'components/header/Logo';
import Button from 'components/reusable/Button';
import SocialIcon from 'components/reusable/socialIcon';
import { fullSocial } from 'data/social/social';
import FooterNavigation from './FooterNavigation';

const Footer = ({ saleText = '', charity = '' }) => {
  const { t, i18n } = useTranslation();
  const button = t('button', { returnObjects: true });
  const footer = t('footer', { returnObjects: true });

  return (
    <footer className="lg:w-[1440px] bg-neutral-600 mx-auto my-0 pt-11 pb-16">
      <Container>
        <div className="flex items-center mb-4 ">
          <Logo />
          <FooterNavigation
            navConfig={footer.nav}
            className="ml-[134px] mr-20"
          />
          <SocialIcon data={fullSocial} language={i18n.language} />
        </div>
        <p className="font-bold leading-10 mx-auto mb-8 text-center">
          {saleText}
        </p>
        <Button className="bg-cyan-500 hover:bg-cyan-600 mx-auto py-4 rounded-xl text-xl lg:w-[410px] mb-[70px] font-bold leading-6 text-bb2040">
          {button.textSmallButton}
        </Button>
        {charity && (
          <p className="text-center font-bold leading-6 text-bb2040">
            {charity}
          </p>
        )}
      </Container>
    </footer>
  );
};

export default Footer;
