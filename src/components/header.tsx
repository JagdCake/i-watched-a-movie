import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { SyntheticEvent } from 'react';
import aboutIcon from '../images/about.svg';
import closeIcon from '../images/close.svg';
import searchIcon from '../images/search.svg';
import MovieLinkSearch from './search-movie-list';
import { MovieSearchData } from './movie-list';
import { PageNavProp } from './footer';

interface TitleHeadingProp {
    title: string;
}

const TitleHeading: FunctionComponent<TitleHeadingProp> = ({
    title,
}): ReactElement => (
    <h1 className="text-center text-2xl font-medium tracking-wide font-slackey bg-red py-3">
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
    // function to toggle something when the button is clicked
    toggleFunction: (event: SyntheticEvent) => void;
}

const Button: FunctionComponent<ButtonProps> = ({
    src,
    alt,
    title,
    toggleFunction,
}: ButtonProps): ReactElement => (
    <button
        onClick={toggleFunction}
        className="transform hover:scale-110 focus:scale-110 active:scale-110 bg-red mt-3 rounded-sm"
    >
        <img className="w-12" src={src} alt={alt} title={title}></img>
    </button>
);

const filterSearchResults: Function = (
    searchValue: string,
    setSearchValue: Function
): void => {
    setTimeout(() => {
        setSearchValue(searchValue);
    }, 700);
};

interface SearchBoxProps extends PageNavProp {
    value?: string;
    disabledStatus?: boolean;
    searchData: MovieSearchData[];
    searchValue?: string;
    setSearchValue?: (value: string) => void;
    disableSearchBox?: () => void;
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({
    value,
    disabledStatus = false,
    searchData,
    pageContext,
    searchValue = '',
    setSearchValue,
    disableSearchBox = () => {
        console.log('Placeholder function to prevent type error.');
    },
}: SearchBoxProps): ReactElement => (
    <div>
        <input
            className={`w-48 rounded-sm border-2 p-2 bg-red text-center border-black mt-3 text-xl ${
                disabledStatus === true ? 'font-slackey' : ''
            }`}
            type="search"
            value={value}
            disabled={disabledStatus}
            autoFocus={disabledStatus === false}
            onChange={(event) => {
                filterSearchResults(event.target.value, setSearchValue);
            }}
        ></input>

        <MovieLinkSearch
            displayStatus={disabledStatus === false}
            movieData={searchData}
            pageContext={pageContext}
            searchValue={searchValue}
            handleClick={disableSearchBox}
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
            <li
                key={index}
                className="hover:text-white focus-within:text-white"
            >
                <a
                    className="inline-block underline mb-3 text-black"
                    href={url}
                >
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
}: HeaderProps): ReactElement => {
    const [aboutSectionVisiblity, setAboutSectionVisibility] = React.useState(
        false
    );
    const [
        searchBoxDisabledStatus,
        setSearchBoxDisabledStatus,
    ] = React.useState(true);
    const [searchValue, setSearchValue] = React.useState('');

    const disableSearchBox = (): void => {
        setSearchBoxDisabledStatus(true);
        setSearchValue('');
    };

    if (searchBoxDisabledStatus === false) {
        window.addEventListener('keyup', (event) => {
            // disable the search box if the Escape key has been pressed
            if (event.keyCode === 27) {
                disableSearchBox();
            }
        });
    }

    return (
        <header>
            <TitleHeading title={siteTitle} />

            <nav className="flex justify-between items-center">
                {aboutSectionVisiblity === false && (
                    <Button
                        src={aboutIcon}
                        alt="Question mark icon"
                        title="Open the About section"
                        toggleFunction={() => {
                            setAboutSectionVisibility(true);
                        }}
                    ></Button>
                )}
                {aboutSectionVisiblity === true && (
                    <Button
                        src={closeIcon}
                        alt="X icon"
                        title="Close the About section"
                        toggleFunction={() => {
                            setAboutSectionVisibility(false);
                        }}
                    ></Button>
                )}

                {searchBoxDisabledStatus === true && (
                    <SearchBox
                        value={`${searchData.length} movies`}
                        disabledStatus={searchBoxDisabledStatus}
                        searchData={[]}
                        pageContext={{}}
                    />
                )}
                {searchBoxDisabledStatus === false && (
                    <SearchBox
                        searchData={searchData}
                        pageContext={pageContext}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        disableSearchBox={disableSearchBox}
                    />
                )}

                {searchBoxDisabledStatus === true && (
                    <Button
                        src={searchIcon}
                        alt="Magnifying glass icon"
                        title="Enable search box"
                        toggleFunction={() => {
                            setSearchBoxDisabledStatus(false);
                        }}
                    ></Button>
                )}
                {searchBoxDisabledStatus === false && (
                    <Button
                        src={closeIcon}
                        alt="X icon"
                        title="Disable search box"
                        toggleFunction={() => {
                            setSearchBoxDisabledStatus(true);
                            setSearchValue('');
                        }}
                    ></Button>
                )}
            </nav>

            <article
                aria-label="About section"
                className={`
                    transition-height-opacity duration-300 ease-in ${
                        aboutSectionVisiblity === false
                            ? 'h-0 opacity-0'
                            : 'h-full opacity-100'
                    }`}
            >
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
                            'Link to IMDb page',
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
};

export default Header;
