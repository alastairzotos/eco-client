import { IPage } from '@ecocms/common';
import { Location } from 'history';
import { Dictionary } from 'lodash';
import * as React from 'react';
import withSideEffects from 'react-side-effect';

import { pagesToTree } from './pages';

export interface IBodyProps {
    className?: string;
    style?: React.CSSProperties;
}

export const Body = withSideEffects<IBodyProps, any>(
    props =>
        props.reduce((acc, cur) => ({
            ...acc,
            ...cur
        }), {}),
    (props: IBodyProps) => {
        document.body.className = props.className || '';
        Object.assign(document.body.style, props.style || {});
    }
)(() => null);

export type IThemePage = Pick<IPage, 'title' | 'description' | 'content' | 'path'>;
export interface IPageNavigation {
    page: IThemePage;
    children: IPageNavigation[];
}

export interface IThemeRenderProps {
    page: IThemePage;
    location: Location<{}>;
    navigation: IPageNavigation[];
    loading: boolean;
}

export type IThemeRenderer = React.FC<IThemeRenderProps>;

export interface IPageTypeRenderer {
    home: IThemeRenderer;
    [pageType: string]: IThemeRenderer;
}

export interface ITheme {
    name: string;

    renderDefault: IThemeRenderer;
    render404?: IThemeRenderer;
    renderPageType?: IPageTypeRenderer;
}

export const defaultTheme: ITheme = {
    name: 'Default',

    renderDefault: ({ page }) => (
        <>
            <h2>{page.title}</h2>
            <p>{page.content}</p>
        </>
    ),

    render404: () => <p>Page not found</p>
};
