import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import { Link } from 'gatsby-plugin-react-i18next';
import MeasureList from '@/components/measure-list';
import Container from '@/components/container';
import { AlertContainer } from '@/components/alert';
import SituationsBox from '@/components/situations-box';
import I18n from '@/components/i18n';
import { IQuery } from 'graphql-types';
import Layout from '@/layouts/default-layout';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { allHomepage } = data;
  const {
    situation_label,
    situation_link,
    measure_label,
    measure_link,
    relationships,
  } = allHomepage.nodes[0];
  const { measure_items, situation_items } = relationships;

  return (
    <Layout>
      <Helmet title="Covid Portál" />
      <AlertContainer />
      <Container className="mt-3">
        <ContentBox
          title={situation_label}
          boldedTitleCount={2}
          buttonText={situation_link?.title}
          buttonHref="/situace"
        >
          <SituationsBox situations={situation_items} />
        </ContentBox>
        <ContentBox
          title={measure_label}
          boldedTitleCount={1}
          buttonVariant="contained"
          buttonText={measure_link?.title}
          buttonHref="/opatreni"
          variant="white"
        >
          <MeasureList measures={measure_items} />
        </ContentBox>
        <Link to="/" language="en" className="">
          English Page
        </Link>
      </Container>
    </Layout>
  );
};
export default Home;

export const query = graphql`
  query IndexQuery($langCode: String!) {
    allHomepage(filter: { langcode: { eq: $langCode } }) {
      nodes {
        measure_label
        measure_link {
          uri
          title
        }
        moderation_state
        measure_text
        situation_label
        situation_link {
          uri
          title
        }
        situation_text
        relationships {
          measure_items {
            id
            title
            relationships {
              region {
                name
              }
            }
          }
          situation_items {
            id
            title
            path {
              alias
            }
          }
        }
      }
    }
  }
`;
