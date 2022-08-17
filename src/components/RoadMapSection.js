import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Container from './reusable/Container';

const RoadMapSection = () => {
  const { t } = useTranslation();

  const data = t('roadMapSection', { returnObjects: true });

  return (
    <section>
      <Container>
        <h2>{data.title}</h2>
        {data.list.length ? (
          <ul>
            {data.list.map((item, id) => (
              <li key={`road-${id}`}>{item}</li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
};

export default RoadMapSection;
