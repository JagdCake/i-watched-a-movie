import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

interface TitleHeadingProp {
    title: string;
}

const TitleHeading: FunctionComponent<TitleHeadingProp> = ({
    title,
}): ReactElement => (
    <h1 className="text-center text-xl font-medium tracking-wide">
        <Link
            className="hover:font-black focus:font-black active:font-black"
            to="/"
        >
            {title}
        </Link>
    </h1>
);

interface ButtonProps {
    src: string;
    alt: string;
    title: string;
}

interface HeaderProps {
    siteTitle: string;
}

const Header: FunctionComponent<HeaderProps> = ({
    siteTitle,
}: HeaderProps): ReactElement => (
    <header className="py-4 px-2 border-b-2 border-black bg-red-500">
        <TitleHeading title={siteTitle} />
    </header>
);

export default Header;
