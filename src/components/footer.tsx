import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';

interface PageLinkProps {
    currentPage: number;
    // link leads to this page number
    pageLink: number;
}

const PageLink: FunctionComponent<PageLinkProps> = ({
    currentPage,
    pageLink,
}: PageLinkProps) => {
    if (currentPage === pageLink) {
        return null;
    }

    return (
        <li className="inline m-1 p-1 bg-black text-red-500 rounded-sm">
            <Link className="p-1" to={`/page/${pageLink}`}>
                {pageLink}
            </Link>
        </li>
    );
};

export interface PageNavProp {
    pageContext: {
        first: number;
        offset: number;
        numPages: number;
        currentPage: number;
    };
}

const PageNav: FunctionComponent<PageNavProp> = ({
    pageContext,
}: PageNavProp): ReactElement => {
    const currentPage: number = pageContext.currentPage;
    const totalPages: number = pageContext.numPages;

    return (
        <nav>
            <ol>
                <li className="inline m-1 p-1 bg-black text-red-500 rounded-sm">
                    <Link className="p-1" to="/page/1`">
                        1
                    </Link>
                </li>

                <li className="inline m-1 p-1">
                    <Link className="p-1" to={`/page/${currentPage - 1}`}>
                        ❮
                    </Link>
                </li>

                <li className="inline m-1 p-1">{currentPage}</li>

                <li className="inline m-1 p-1">
                    <Link className="p-1" to={`/page/${currentPage + 1}`}>
                        ❯
                    </Link>
                </li>

                <li className="inline m-1 p-1 bg-black text-red-500 rounded-sm">
                    <Link className="p-1" to={`/page/${totalPages}`}>
                        {totalPages}
                    </Link>
                </li>
            </ol>
        </nav>
    );
};

const Footer: FunctionComponent<PageNavProp> = ({
    pageContext,
}: PageNavProp): ReactElement => {
    return (
        <footer className="w-full bg-red-500 text-center text-2xl mt-6 p-4">
            <PageNav pageContext={pageContext} />
        </footer>
    );
};

export default Footer;
