import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import aboutIcon from '../images/about.svg';
import searchIcon from '../images/search.svg';

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

interface SearchBoxProps {
    value?: string;
    disabledStatus?: boolean;
    // the "id" of a datalist element
    datalistId?: string;
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({
    value,
    disabledStatus = false,
    datalistId,
}: SearchBoxProps): ReactElement => (
    <input
        className="w-48 h-8 rounded-sm border-2 p-2 bg-red-500 text-center border-black"
        type="search"
        value={value}
        disabled={disabledStatus}
        list={datalistId}
    ></input>
);

interface GeneralInfoProps {
    siteDescription: string;
    movieDescriptionItems: [string];
}

const GeneralInfo: FunctionComponent<GeneralInfoProps> = ({
    siteDescription,
    movieDescriptionItems,
}: GeneralInfoProps): ReactElement => {
    const descriptionItems: ReactElement[] = movieDescriptionItems.map(
        (item, index) => {
            return <li key={index}>{item}</li>;
        }
    );

    return (
        <section className="py-3 pl-4 border-b border-black">
            <p className="mb-2">{siteDescription}</p>

            <ol className="list-decimal list-outside">{descriptionItems}</ol>
        </section>
    );
};

interface HeaderProps {
    siteTitle: string;
}

const Header: FunctionComponent<HeaderProps> = ({
    siteTitle,
}: HeaderProps): ReactElement => (
    <header className="py-4 px-2 border-b-2 border-black bg-red-500">
        <TitleHeading title={siteTitle} />

        <nav className="flex justify-between items-center">
            <Button
                src={aboutIcon}
                alt="Question mark icon"
                title="Open the About section"
            ></Button>

            <SearchBox value="the number of movies" disabledStatus={true} />

            <Button
                src={searchIcon}
                alt="Magnifying glass icon"
                title="Enable search box"
            ></Button>
        </nav>
    </header>
);

export default Header;
