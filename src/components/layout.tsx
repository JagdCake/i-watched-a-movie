/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';

import Header from './header';
import './main.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
    children,
}: LayoutProps): ReactElement => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className="text-black bg-black">
            <Header siteTitle={data.site.siteMetadata.title} />
            <main className="w-full flex flex-wrap justify-center">
                <div className="separator w-full mt-6 h-px"></div>
                {children}
            </main>
        </div>
    );
};

export default Layout;
