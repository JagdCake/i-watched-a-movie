import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';
import upIcon from '../images/up.svg';

interface BackToTopLinkProp {
    linkToTopOfWindow: string;
}

const BackToTopLink: FunctionComponent<BackToTopLinkProp> = ({
    linkToTopOfWindow,
}: BackToTopLinkProp): ReactElement => {
    return (
        <Link
            title="Back to top"
            to={linkToTopOfWindow}
            className="opacity-75 hover:opacity-100 focus:opacity-100"
        >
            <span className="absolute right-0 mr-3 p-2 bg-black rounded-full shadow-black z-10 2xl:mr-40 3xl:mr-92 4xl:mr-184 5xl:mr-316">
                <img className="w-full" src={upIcon} alt="Up arrow icon"></img>
            </span>
        </Link>
    );
};

export default BackToTopLink;
