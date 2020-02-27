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

const Button: FunctionComponent<ButtonProps> = ({
    src,
    alt,
    title,
}: ButtonProps): ReactElement => (
    <button>
        <img className="w-12" src={src} alt={alt} title={title}></img>
    </button>
);

interface HeaderProps {
    siteTitle: string;
}

const Header: FunctionComponent<HeaderProps> = ({
    siteTitle,
}: HeaderProps): ReactElement => (
    <header className="py-4 px-2 border-b-2 border-black bg-red-500">
        <TitleHeading title={siteTitle} />

        <nav className="flex justify-between items-center"></nav>
    </header>
);

export default Header;
