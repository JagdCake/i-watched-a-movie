import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';

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
