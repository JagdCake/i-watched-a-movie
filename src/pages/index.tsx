import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';


export const query = graphql`
    query AllMovies {
        postgres {
            allMoviesList(orderBy: ID_DESC) {
                id
                title
                yearOfRelease
                directors
                topActors
                myRating
                watchedOn
                imdbId
                discussion
            }
        }
    }
`;

interface MovieData {
    data: {
        postgres: {
            allMoviesList: [
                {
                    id: number;
                    title: string;
                    yearOfRelease: number;
                    directors: string;
                    topActors: string;
                    myRating: string;
                    watchedOn: string;
                    imdbId: string;
                    discussion: string;
                }
            ];
        };
    };
}

const IndexPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Home" />
        <h1 className="text-3xl">Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div className="max-w-xs mb-6">
            <Image />
        </div>
        <Link className="underline text-blue-500" to="/page-2/">
            Go to page 2
        </Link>
    </Layout>
);

export default IndexPage;
