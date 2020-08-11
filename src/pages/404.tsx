import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import '../components/main.css';

const NotFoundPage: FunctionComponent = (): ReactElement => (
    <>
        <SEO title="404: Not found" />
        <main className="text-center pt-64 w-screen h-screen bg-black">
            <h1 className="text-6xl text-red">PAGE NOT FOUND</h1>
            <p className="text-white text-2xl">
                Please return to the&nbsp;
                <Link to="/page/1" className="underline">
                    first page.
                </Link>
            </p>
        </main>
    </>
);

export default NotFoundPage;
