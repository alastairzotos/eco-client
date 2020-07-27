// import loadable from '@loadable/component';
import * as React from 'react';

import { IPages } from '../../../core';

import StaticPage from './StaticPage';

export default {
    // '/': loadable(async () => import('./StaticPage')),
    // '*': loadable(async () => import('./StaticPage')),
    '/': StaticPage
} as IPages;
