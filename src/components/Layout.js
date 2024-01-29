import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import GlobalStyle from '../styles/GlobalStyle';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ seo, children }) => {
  const {
    datoCmsSite: { faviconMetaTags },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      datoCmsSite {
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
    }
  `);

  return (
    <>
      <HelmetDatoCms seo={seo} favicon={faviconMetaTags} />
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
