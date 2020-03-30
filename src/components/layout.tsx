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
import { PageNavProp } from './footer';
import Footer from './footer';

interface LayoutProps extends PageNavProp {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
    children,
    pageContext,
}: LayoutProps): ReactElement => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
            movieSearch: postgres {
                allMoviesList(orderBy: ID_DESC) {
                    id
                    title
                    yearOfRelease
                }
            }
        }
    `);

    return (
        <div className="text-black bg-black">
            <Header
                siteTitle={data.site.siteMetadata.title}
                searchData={data.movieSearch.allMoviesList}
                pageContext={pageContext}
            />
            <main className="w-full flex flex-wrap justify-center font-oswald">
                <div className="separator w-full my-6 h-px"></div>
                {children}
            </main>
            <Footer pageContext={pageContext} />
        </div>
    );
};

export default Layout;
