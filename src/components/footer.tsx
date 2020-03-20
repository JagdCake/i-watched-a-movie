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

interface PageChangeLinkProps {
    currentPage: number;
    // hide the link when this is the current page
    hideOnPage: number;
    // should the link lead to the next or to the previous page
    nextOrPreviousPage: 'nextPageLink' | 'previousPageLink';
}

const PageChangeLink: FunctionComponent<PageChangeLinkProps> = ({
    currentPage,
    hideOnPage,
    nextOrPreviousPage,
}: PageChangeLinkProps) => {
    if (currentPage === hideOnPage) {
        return null;
    }

    switch (nextOrPreviousPage) {
        case 'previousPageLink':
            return (
                <li className="inline m-1 p-1">
                    <Link className="p-1" to={`/page/${currentPage - 1}`}>
                        ❮
                    </Link>
                </li>
            );
        default:
            return (
                <li className="inline m-1 p-1">
                    <Link className="p-1" to={`/page/${currentPage + 1}`}>
                        ❯
                    </Link>
                </li>
            );
    }
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
        <nav aria-label="page navigation">
            <ol>
                <PageLink currentPage={currentPage} pageLink={1} />

                <PageChangeLink
                    currentPage={currentPage}
                    hideOnPage={1}
                    nextOrPreviousPage="previousPageLink"
                />

                <li className="inline m-1 p-1">{currentPage}</li>

                <PageChangeLink
                    currentPage={currentPage}
                    hideOnPage={totalPages}
                    nextOrPreviousPage="nextPageLink"
                />

                <PageLink currentPage={currentPage} pageLink={totalPages} />
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