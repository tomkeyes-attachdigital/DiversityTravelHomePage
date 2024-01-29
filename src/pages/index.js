import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Video from '../components/Video';

const IndexPage = () => {
  const {
    datoCmsHome: { seoMetaTags, title, yearfounded, bannerparagraph },
  } = useStaticQuery(graphql`
    query IndexPageQuery {
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        title
        yearfounded
        bannerparagraph
      }
    }
  `);

  return (
    <Layout seo={seoMetaTags}>
      <main>
        <Banner heading={title} yearfounded={yearfounded} body={bannerparagraph} />
        <Video/>
      </main>
    </Layout>
  );
};

export default IndexPage;