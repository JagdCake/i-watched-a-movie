import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

export interface PageNavProp {
    pageContext: {
        first: number;
        offset: number;
        numPages: number;
        currentPage: number;
    };
}
