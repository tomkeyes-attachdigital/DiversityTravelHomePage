import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const IndexPage = () => {
  const {
    datoCmsHome: { seoMetaTags, title },
  } = useStaticQuery(graphql`
    query IndexPageQuery {
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        title
      }
    }
  `);

  return (
    <Layout seo={seoMetaTags}>
      <main>
        <Banner heading={title} />
      </main>
    </Layout>
  );
};

export default IndexPage;
