import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import aboutIcon from '../images/about.svg';
import searchIcon from '../images/search.svg';
import MovieLinkList from './movie-list';
import { MovieSearchData } from './movie-list';
import { PageNavProp } from './footer';

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

interface SearchBoxProps extends PageNavProp {
    value?: string;
    disabledStatus?: boolean;
    searchData: MovieSearchData[];
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({
    value,
    disabledStatus = false,
    searchData,
    pageContext,
}: SearchBoxProps): ReactElement => (
    <div>
        <input
            className="w-48 h-8 rounded-sm border-2 p-2 bg-red-500 text-center border-black"
            type="search"
            value={value}
            disabled={disabledStatus}
        ></input>

        <MovieLinkList
            displayStatus={!disabledStatus}
            movieData={searchData}
            pageContext={pageContext}
        />
    </div>
);

interface GeneralInfoProps {
    siteDescription: string;
    movieEntryItems: [string];
}

const GeneralInfo: FunctionComponent<GeneralInfoProps> = ({
    siteDescription,
    movieEntryItems,
}: GeneralInfoProps): ReactElement => {
    const entryItems: ReactElement[] = movieEntryItems.map((item, index) => {
        const itemsFirstCharacter: string = item[0];
        const itemStartsWithQuote: boolean = itemsFirstCharacter.includes('"');

        if (itemStartsWithQuote) {
            return (
                <li className="text-indent-quote" key={index}>
                    {item}
                </li>
            );
        }

        return <li key={index}>{item}</li>;
    });

    return (
        <>
            <p className="mb-2">{siteDescription}</p>

            <ol className="list-decimal list-outside">{entryItems}</ol>
        </>
    );
};

type MyRating = string;
type RangeOfIMDbRatings = [number, number];

interface RatingSystemProp {
    ratings: [[MyRating, RangeOfIMDbRatings]];
}

const RatingSystem: FunctionComponent<RatingSystemProp> = ({
    ratings,
}: RatingSystemProp): ReactElement => {
    const ratingItems: ReactElement[] = ratings.map((item, index) => {
        const myRating = item[0];
        const [IMDbRangeStart, IMDbRangeEnd] = item[1];

        return (
            <li key={index}>
                {myRating} = &nbsp;
                <span className="font-mono">
                    {IMDbRangeStart}–{IMDbRangeEnd}
                </span>
                <span>&nbsp;IMDb stars</span>
            </li>
        );
    });

    return (
        <>
            <h1 className="font-bold text-center mb-2">Rating system</h1>

            <ul className="list-disc list-outside">{ratingItems}</ul>
        </>
    );
};

export type LinkUrl = string;
type LinkName = string;

interface ContactInfoProps {
    email: string;
    contactLinks: [[LinkUrl, LinkName]];
}

const ContactInfo: FunctionComponent<ContactInfoProps> = ({
    email,
    contactLinks,
}: ContactInfoProps): ReactElement => {
    const links: ReactElement[] = contactLinks.map((link, index) => {
        const url = link[0];
        const linkName = link[1];

        return (
            <li key={index}>
                <a className="block underline mb-3" href={url}>
                    {linkName}
                </a>
            </li>
        );
    });

    return (
        <>
            <h1 className="font-bold text-center mb-2">Contact</h1>

            <address className="mb-3 text-center">
                <a className="not-italic" href={`mailto:${email}`}>
                    {email}
                </a>
            </address>

            <ul className="list-outside list-disc">{links}</ul>
        </>
    );
};

interface HeaderProps extends PageNavProp {
    siteTitle: string;
    searchData: MovieSearchData[];
}

const Header: FunctionComponent<HeaderProps> = ({
    siteTitle,
    searchData,
    pageContext,
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

        <article aria-label="About section">
            <section
                aria-label="General information"
                className="py-3 pl-4 border-b border-black"
            >
                <GeneralInfo
                    siteDescription="This is my personal movie catalogue. The idea is to catalogue
                    every movie I (re)watch by creating entries which include 5 elements:"
                    movieEntryItems={[
                        'Info card',
                        'My rating',
                        '"Watched on" date',
                        'Movie discussion or reviews',
                        'IMDb link',
                    ]}
                />
            </section>

            <section
                aria-label="Rating system"
                className="py-3 pl-4 border-b border-black"
            >
                <RatingSystem
                    ratings={[
                        ['Bad Eggplant', [1, 3.9]],
                        ['Decent Carrot', [4, 4.9]],
                        ['Good Tomato', [5, 5.9]],
                        ['Great Onion', [6, 7.8]],
                        ['Amazing Savory', [7.9, 8.9]],
                        ['Sublime Lettuce', [9, 10]],
                    ]}
                />
            </section>

            <footer aria-label="Contact information" className="py-3 pl-4">
                <ContactInfo
                    email="jc@jagdcake.com"
                    contactLinks={[
                        [
                            'https://github.com/JagdCake/site.movies',
                            'GitHub repository',
                        ],
                        [
                            'https://data.jagdcake.com/',
                            'Data on watched movies',
                        ],
                    ]}
                />
            </footer>
        </article>
    </header>
);

export default Header;
