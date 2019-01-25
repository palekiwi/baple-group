import * as React from "react";
import { Layout, LayoutData } from "./Layout";
import { StaticQuery, graphql } from "gatsby";

const LayoutGroup: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutGroupQuery {
        settings: settingsYamlX(fields: { slug: { eq: "/" } }) {
          ...LayoutFragment
        }
      }
    `}
    render={(data: LayoutData) => {
      const { nav, logo, email, phone, title } = data.settings;
      return (
        <Layout
          navItems={nav}
          title={title}
          phone={phone}
          email={email}
          logo={logo}
        >
          {children}
        </Layout>
      );
    }}
  />
);

export { LayoutGroup };
